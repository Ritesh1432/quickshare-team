import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
export default function Login() {
  const [logindata,setLogindata] = useState([])
  const [registeredusers,setRegisteredUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState(false);
  
  let navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => setRegisteredUsers(data))
  }, [])
  

  const handleChange = ((e) => {
    setLogindata({
      ...logindata,
      [e.target.name] : e.target.value
    })
  })

  // console.log(logindata);
  const  handleSubmit = ((e) => {
    e.preventDefault();

    const checkCredentials =(data => {
      if(data.uname === logindata.uname && data.pw === logindata.password) {
        localStorage.setItem('Username',logindata.uname);
      }
      else {
        setErrorMessage(true);
      }
    })  
      
    registeredusers && registeredusers.forEach(data => {
      checkCredentials(data)
    })
    
    if(localStorage.getItem('Username')) {
      navigate('/')
      window.location.reload(false);
    }
  })
   
   
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">QUICKSHARE</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          {
            errorMessage && <p className="errorMessage">Invalid Credentials</p>
          }
          <div className="loginBox">
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder="Username" className="loginInput" onChange={handleChange} name='uname' required/>
              <input type='password' placeholder="Password" className="loginInput" onChange={handleChange} name='password' required/>
              <button className="loginButton" type="submit">Log In</button>
            </form>
            <button className="loginRegisterButton" onClick={() => navigate('/register')}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

