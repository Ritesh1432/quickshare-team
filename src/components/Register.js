import React, { useState } from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    const [formData,setFormData] = useState([])
  const handleChange = ((e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
    
  })

   const handleSubmit  =((e) => {
    if(formData.pw !== formData.cpw)
    alert('Password did not match')
    else
    {
        e.preventDefault();
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
})
    }
   })

  return (
    <div className="signBody">
        
        <div className="mainRegister">
            <div className="appName">
                <b>QuickShare</b>
            </div>
            <div className="submain">
                <div className="heading">
                    Sign up to Quick Share
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
                        <input name='uname' placeholder='Enter Username' type='text' onChange={handleChange} />
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
                <div className="blocks">
                    <div>
                        <input name='pw' placeholder='Enter Password' type='password' onChange={handleChange}/>
                    </div>        
                </div>
                <div className="blocks">
                    <div>
                        <input name='cpw' placeholder='Confirm Password' type='password' onChange={handleChange}/>
                    </div>        
                </div>
                <div>
                    <button className="signup" type='submit' value='Signup'>Sign Up</button>
                </div>
                </form>
                <div className="signLink">
                    <Link to='/login'>Already an user? Log in to Socialize</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

