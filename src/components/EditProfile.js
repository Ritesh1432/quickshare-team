import React, { useState } from 'react'
import '../css/EditProfile.css'

export default function EditProfile() {
    const [formData,setFormData] = useState([])
    const handleChange = ((e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })

    const handleSubmit = ((e) => {
        if(formData.pw !== formData.cpw)
            alert('Password did not match')
        else
        {
            e.preventDefault();
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(formData)})
        }
    })

  return (
    <div className="signBody">
        
        <div className="main">
            <div className="appName">
                <b>Username: {localStorage.getItem('Username')}</b>
            </div>
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
            </div>
        </div>
    </div>
  )
}
