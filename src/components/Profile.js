import React, { useEffect, useState } from "react";
import styles from "../css/Profile.module.css";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import PostComponent from "./PostComponent";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetail, setUserDetail] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const [myPosts] = useState([]);
  const [myPostButton,setMyPostButton] = useState(false)
  const [userPost, setUserPost] = useState([]);
  const [changePassword, setChangePassword] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
    setCurrentUser(localStorage.getItem("Username"));
  }, []);

  useEffect(() => {
    let user1 = users.find((u) => u.uname === currentUser);
    setUserDetail(user1);
    // console.log(user1);
  }, [users, currentUser]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/posts')
  //   .then(res => res.json())
  //   .then(data => setUserPost(data))
  // },[])

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => b.id - a.id);
        setUserPost(data);
        // console.log(data);
        // console.log("Sorted Data: ",data.sort((a, b) => b.id - a.id));
      });
  }, []);
// console.log(userPost);

const viewPost = () => { 
  setMyPostButton(true)
  setEditProfile(false)
  setChangePassword(false)
  if(myPosts.length===0)
  {
    userPost.filter(post => post.uname === localStorage.getItem('Username') && myPosts.push(post))
  }
    
}


console.log(myPosts);

  return (

    <div className={styles.gridContainer}>
      <div className={styles.gridItemLeft}>
        <div className={styles.profileBody}>
          <div className={styles.dataBlock}>
            <h1 className={styles.myProfileText}>My Profile</h1>
            <img
              src="https://images.unsplash.com/photo-1657642269974-e97223e7b7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              className={styles.myProfileImageStyle}
              alt="ProfileImage"
            />
            <div className={styles.myProfileDiv}>
              <div className={styles.myProfileFields}>
                {userDetail && userDetail.fname}{" "}
                {userDetail && userDetail.lname}
              </div>
            </div>
            <div className={styles.myProfileDiv}>
              <p className={styles.myProfileFields}>
                {userDetail && userDetail.uname}
              </p>
            </div>
            <div className={styles.myProfileDiv}>
              <p className={styles.myProfileFields}>
                {userDetail && userDetail.email}
              </p>
            </div>
            <div className={styles.myProfileDiv}>
              <p className={styles.myProfileFields}>
                {userDetail && userDetail.pno}
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  setMyPostButton(false)
                  setChangePassword(false);
                  setEditProfile(true);
                }}
              >
                Edit Profile
              </button>
              <button
              type="submit"
              onClick={() => {
                setMyPostButton(false)
                setChangePassword(true);
                setEditProfile(false);
                
          }}
          value="changePassword"
          className={styles.changePassButton}
        >
          Change Password
        </button>
            </div>
            <div>
              <button onClick={viewPost} className={styles.viewMyPosts}>My Posts</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div>
          {editProfile && <EditProfile userDetail={userDetail} />}
          <div className={styles.myPostCard}>
            {myPosts &&
              myPosts.map((post, index) => {
                // console.log(post);
                return (
                  myPostButton && <PostComponent
                    key={index}
                    title={post.postTitle}
                    image={post.postImage}
                    content={post.postClass}
                    uname={post.uname}
                    id={post.id}
                  />
                );
              })}
          </div>

          <div>
            {changePassword && <ChangePassword userDetail={userDetail} />}
          </div>
        </div>
      </div>
    </div>
  );
}
