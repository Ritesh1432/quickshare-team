import React from 'react'
import '../css/ChangePassword.css'
import  {useState} from 'react'
// import { Navigate } from 'react-router-dom'

export default function ChangePassword({userDetail}) {
    const [formData,setFormData] = useState([])

    const handleChange = ((e) => {
        e.preventDefault();
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
        })
    console.log(formData);
    })
    
    const handleSubmit  = ((e) => {
        e.preventDefault();
        if(formData.oldpw !== userDetail.pw)
            alert("Incorrect Old Password!")
        else if(formData.newpw !== formData.cpw)
            alert("New passwords didn't match")
        else 
        {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "pw":  formData.newpw, "cpw":formData.newpw })
            };
            fetch('http://localhost:3000/users', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id))
        }
        
    });
    
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
                        <input name='cpw' placeholder='Confirm new password' type='text' onChange={handleChange}/>
                    </div>
                
                    <button className='passwordbutton'>Edit</button>
                </div>
                </form>
            </div>
        </div>
    </div>

    
  )
}
