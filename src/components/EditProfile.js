import React, { useState } from 'react'
import '../css/EditProfile.css'
import ChangePassword from './ChangePassword';

export default function EditProfile() {
    const [formData,setFormData] = useState([])
    const handleChange = ((e) => {
        console.log(e);
    })

    const handleSubmit = ((e) => {
        console.log(e);
    })

  return (
    <div className="signBody">
        
        <div className="main">
            <div className="submain">
                <div className="heading">
                    Edit Your Details
                </div>
            <form onSubmit={handleSubmit}>
                <div className="blocks">
                    <div>
                        <input name='fname' placeholder='First name' type='text' onChange={handleChange} />
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='lname' placeholder='Last name' type='text' onChange={handleChange}  />
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='email' placeholder='Enter Email ID' type='email' onChange={handleChange}/>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='pno' placeholder='Enter Phone Number' type='number' onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button className="signup" type='submit' value='editProfile'>Edit</button>
                </div>
                </form>
                <ChangePassword userDetail={userDetail}/>
            </div>
        </div>
    </div>
  )
}
