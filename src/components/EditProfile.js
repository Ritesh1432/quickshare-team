import React, { useState } from "react";
import styles from "../css/EditProfile.module.css";
import ChangePassword from "./ChangePassword";

export default function EditProfile({ userDetail }) {
  const [updatedData, setUpdatedData] = useState(userDetail);

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
    // console.log(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UPDATED DATA: ", updatedData);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    };
    fetch(
      "http://localhost:3000/users/" + userDetail.id.toString(),
      requestOptions
    );
    // .then(response => response.json())
    // .then(data => console.log(data.id));
    window.location.reload(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.heading}>Edit Your Details</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.blocksStyles}>
           
            <input
              name="fname"
              placeholder="First name"
              type="text"
              onChange={handleChange}
              value={updatedData.fname}
              className={styles.inputClassStyle}
            />
          </div>
          <div className={styles.blocksStyles}>
          
            <input
              name="lname"
              placeholder="Last name"
              type="text"
              onChange={handleChange}
              value=  {updatedData.lname}
              className={styles.inputClassStyle}
            />
          </div>
          <div className={styles.blocksStyles}>
            
            <input
              name="email"
              placeholder="Enter Email ID"
              type="email"
              onChange={handleChange}
              value={updatedData.email}
              className={styles.inputClassStyle}
            />
          </div>
          <div className={styles.blocksStyles}>
            
            <input
              name="pno"
              placeholder="Enter Phone Number"
              type="number"
              onChange={handleChange}
              value={updatedData.pno}
              className={styles.inputClassStyle}
            />
          </div>
          <div>
            <button className={styles.editProfileButton} type="submit" value="editProfile">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
