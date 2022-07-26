import React, { useEffect, useState } from 'react'
import '../css/Profile.css'

export default function Profile() {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [userDetail, setUserDetail] = useState({});


    useEffect(() => {
        fetch("http://localhost:3000/users")
          .then(res => res.json())
          .then(data => {setUsers(data)})
          .catch(err=>console.log(err));
        setCurrentUser(localStorage.getItem('Username'));
      }, []);

    useEffect(()=>{

        let user1 = users.find(u=>u.uname===currentUser);
        setUserDetail(user1);
        console.log(user1);

    }, [users, currentUser]);



  return (

    <div>
        <div className='profileBody'>
            <div className='dataBlock'>
                <h1>User Details</h1>
                <h2>Name: {userDetail && userDetail.fname} {userDetail && userDetail.lname}</h2>
                <h2>User name: {userDetail && userDetail.uname}</h2>
                <h2>Email ID: {userDetail && userDetail.email}</h2>
                <h2>Phone number: {userDetail && userDetail.pno}</h2>
                <div><button>Edit Profile</button> <button>View Posts</button></div>

            </div>
        </div>
    </div>
  )
}
