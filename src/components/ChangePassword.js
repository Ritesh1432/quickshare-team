import React from 'react'
import styles from '../css/ChangePassword.module.css'
import  {useState} from 'react'
// import { Navigate } from 'react-router-dom'

export default function ChangePassword({userDetail}) {
    const [formData,setFormData] = useState({});

    const handleChange = ((e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
        })
    // console.log(formData);
    })
    
    const handleSubmit  = ((e) => {
        e.preventDefault();
        if(formData.oldpw !== userDetail.pw)
            alert("Old password didn't match")
        else if(formData.newpw !== formData.cpw)
            alert("New passwords didn't match")
        else if(formData.newpw === userDetail.pw)
            alert("Enter new password!!")
        else 
        {
            const updatedUser = {
                ...userDetail
            }
            updatedUser["pw"] = formData.newpw;
            updatedUser["cpw"] = formData.newpw;
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser)
            };
            fetch('http://localhost:3000/users/'+userDetail.id, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
            alert("PASSWORD UPDATED!!")
            window.location.reload(false)
        }
        
    });
    
  return (
    <div>
        <div className="main">
            <div className="submain">
                <div className={styles.heading}>
                    Edit Your Password
                </div>
            <form onSubmit={handleSubmit}>
                <div className="blocks1">
                    <div>
                        <input name='oldpw' placeholder='Old Password' type='text'onChange={handleChange} className={styles.inputClassStyle}/>
                    </div>
                </div>
                <div className="blocks1">
                    <div>
                        <input name='newpw' placeholder='New Password' type='text' onChange={handleChange}  className={styles.inputClassStyle}/>
                    </div>
                </div>
                <div className="blocks1">
                    <div>
                        <input name='cpw' placeholder='Confirm new password' type='text' onChange={handleChange} className={styles.inputClassStyle}/>
                    </div>
                
                    <button type='submit' className={styles.passwordButton}>Change Password</button>
                </div>
                </form>
            </div>
        </div>
    </div>

    
  )
}
