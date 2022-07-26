import React from 'react'
import '../css/Register.css'

export default function Register() {
  return (
    <div className="signBody">
        
        <div className="main">
            <div className="appName">
                <b>Socialize</b>
            </div>
            <div className="submain">
                <div className="heading">
                    Sign up to Socialize
                </div>

                <div className="blocks">
                    <div>
                        <input name='fname' placeholder='First name' type='text'></input>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='lname' placeholder='Last name' type='text'></input>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='uname' placeholder='Enter Username' type='text'></input>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='email' placeholder='Enter Email ID' type='email'></input>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='pno' placeholder='Enter Phone Number' type='number'></input>
                    </div>
                </div>
                <div className="blocks">
                    <div>
                        <input name='pw' placeholder='Enter Password' type='password' ></input>
                    </div>        
                </div>
                <div className="blocks">
                    <div>
                        <input name='cpw' placeholder='Confirm Password' type='password' ></input>
                    </div>        
                </div>
                <div>
                    <button className="signup" value='Signup'>Sign Up</button>
                </div>
                <div className="signLink">
                    {/* <Link to='/login'>Already an user? Log in to Socialize</Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

