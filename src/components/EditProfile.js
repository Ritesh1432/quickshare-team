import React, { useState } from 'react'
import '../css/EditProfile.css'
import ChangePassword from './ChangePassword';

export default function EditProfile({userDetail}) {
    const [updatedData, setUpdatedData] = useState(userDetail);

    const handleChange = ((e) => {
        setUpdatedData({
            ...updatedData,
            [e.target.name] : e.target.value
            })
        console.log(updatedData);
        })

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log("UPDATED DATA: ", updatedData);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        };
        fetch('http://localhost:3000/users/'+userDetail.id.toString(), requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
        window.location.reload(false);

    });


  return (
    <div className="main">
        <div className="submain">
            <div className="heading">
                Edit Your Details
            </div>
            <form onSubmit={handleSubmit}>
                <div className="blocks">
                    <div>
                        <input name='fname' placeholder='First name' type='text' onChange={handleChange} value={updatedData.fname}/>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='lname' placeholder='Last name' type='text' onChange={handleChange} value={updatedData.lname} />
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='email' placeholder='Enter Email ID' type='email' onChange={handleChange} value={updatedData.email}/>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='pno' placeholder='Enter Phone Number' type='number' onChange={handleChange} value={updatedData.pno} />
                    </div>
                </div>
                <div>
                    <button className="signup" type='submit' value='editProfile'>Edit</button>
                </div>
                </form>
                {/* <ChangePassword userDetail={userDetail}/> */}
            </div>
        </div>
  )
}
