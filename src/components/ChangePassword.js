import React from 'react'
import '../css/ChangePassword.css'
import  {useState} from 'react'
// import { Navigate } from 'react-router-dom'

export default function ChangePassword() {
    const [formData,setFormData] = useState([])


    
    const handleSubmit  =((e) => {
        if(formData.oldpw !== formData.pw)
        alert('Password did not match')})
        
    const handleChange  =((e) => {
    })
    


  return (
    <div>
        <div className="main">
            <div className="submain">
                <div className="heading">
                    Edit Your Password
                </div>
            <form onSubmit={()=> handleSubmit()}>
                <div className="blocks1">
                    <div>
                        <input name='oldpw' placeholder='old password' type='text'onChange={handleChange}  />
                    </div>
                </div>
                <div className="blocks1">
                    <div>
                        <input name='newpw' placeholder='new password' type='text' onChange={handleChange} />
                    </div>
                </div>
                <div className="blocks1">
                    <div>
                        <input name='repw' placeholder='Renter new password' type='text' onChange={handleChange}/>
                    </div>
                
                    <button className='passwordbutton'>Edit</button>
                </div>
                </form>
            </div>
        </div>
    </div>

    
  )
}
