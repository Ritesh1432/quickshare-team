import React, { useEffect, useState } from 'react'
import styles from '../css/Register.module.css'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    const [formData,setFormData] = useState([])
    var regName = /^[a-zA-Z]+$/i;
    const [regFirstName,setRegFirstName] = useState(true)
    const [regLastName,setRegLastName] = useState(true)
    const [isPhoneNo,setIsPhoneNo] = useState(true)
    const [passCheck,setPassCheck] = useState(true)
    const [confPassCheck,setConfPassCheck] = useState(true)
    const [registeredUsers, setRegisteredUsers] = useState([])
    const [alreadyRegistered, setAlreadyRegistered] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setRegisteredUsers(data))
      }, [])

    useEffect(() => {
        if(formData.pw !== formData.cpw)
            setConfPassCheck(false)
        else
            setConfPassCheck(true)
    }, [formData.cpw])

    useEffect(() => {
        registeredUsers.map(u=>{
            if(u.uname===formData.uname)
            {
                setAlreadyRegistered(true)
                console.log(u.uname)
            }
        })
        // console.log("alreadyRegistered: ",alreadyRegistered)
        // console.log("used username: ",usedUname)
    }, [formData.uname])
    
    
    
    const handleChange = ((e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
        })
        if (regName.test(formData.fname))
            setRegFirstName(true)
        else 
            setRegFirstName(false)
        if (regName.test(formData.lname))
            setRegLastName(true)
        else 
            setRegLastName(false)

        if(formData.pno)
        {
            if(formData.pno.length === 10)
                setIsPhoneNo(true)
            else
                setIsPhoneNo(false)
        }
        if(formData.pw)
        {
            if(formData.pw.length < 6)
                setPassCheck(false)
            else
                setPassCheck(true)
        }
        if(formData.pw !== formData.cpw)
            setConfPassCheck(false)
        else
            setConfPassCheck(true)
        
        
    })

    const handleSubmit  = ((e) => {
        e.preventDefault();
        const checkPassword = () => {
            if(formData.pw !== formData.cpw)
                {
                    setConfPassCheck(false)
                    return false
                }
            else
            {
                setConfPassCheck(true)
                return true
            }
        }
        // console.log("CONF PW: ",confPassCheck);

        if(regFirstName && regLastName && isPhoneNo && passCheck && checkPassword() && !alreadyRegistered)
        {
            
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            })
            // console.log("DATA SUBMITTED");
            navigate('/login');
            
        }

    })

  return (
    <div className={styles.gridOuterClass}>
       <div class={styles.gridItemLeft}>
       <div className={styles.appName}>
                <b>QuickShare</b>
                <br />
                <span className={styles.registerDesc}>
                        Connect with friends and the world around you.
                </span>
        </div>
       </div>
       <div class={styles.gridItemRight}>
       <div className={styles.signBody}>
        <div className={styles.mainRegister}>
            <div className={styles.submain}>
                <div className={styles.heading}>
                    Welcome to QuickShare
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.blocks}>
                     
                        <input name='fname' placeholder='First name' type='text' onChange={handleChange} required/>
                        {
                            !regFirstName &&
                            
                            <div className='errorMessage1'>
                            <span>First Name cannot contain number or special character</span>
                            </div>

        
                        }
                        
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='lname' placeholder='Last name' type='text' onChange={handleChange} required />
                            {
                             !regLastName && 
                             <div className='errorMessage1'>
                                <span>Last Name cannot contain number or special character</span>
                            </div>
                            }
                        </div>
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='uname' placeholder='Enter Username' type='text' onChange={handleChange} required/>
                        </div>
                        {
                            alreadyRegistered &&
                            <div className='errorMessage1'>
                                <span>Username is already in use</span>
                            </div>
                        
                        }
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='email' placeholder='Enter Email ID' type='email' onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='pno' placeholder='Enter Phone Number' type='number' onChange={handleChange} required/>
                            { !isPhoneNo &&
                                <div className='errorMessage1'>
                                <span>Enter valid phone number</span>
                                </div>
                            }
                            
                        </div>
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='pw' placeholder='Enter Password' type='password' onChange={handleChange} required/>
                            {
                            !passCheck && <div className='errorMessage1'>
                                <span>Password should be contain minimum 6 characters</span>
                            </div>
                            }
                        </div>        
                    </div>
                    <div className={styles.blocks}>
                        <div>
                            <input name='cpw' placeholder='Confirm Password' type='password' onChange={handleChange} required/>
                            {
                            !confPassCheck &&
                            <div className='errorMessage1'>
                                <span>Confirm password should match with password</span>
                            </div>
                            }
                        </div>        
                    </div>
                    <div>
                        <button className={styles.signup} type='submit' value='Signup'>Sign Up</button>
                    </div>
                </form>
                <div >
                    <button className={styles.signInButton} onClick={() => navigate('/login')}>Already Registered ? Login</button>
                </div>
            </div>
        </div>
    </div>
       </div>
    </div>
  )
}

