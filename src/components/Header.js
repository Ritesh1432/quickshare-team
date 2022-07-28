import React from 'react'
import '../css/Header.css'
import {Link, useNavigate} from 'react-router-dom'

export default function Header() {
  // const [isLogin, setIsLogin] = useState(false);

  let navigate = useNavigate(); 
  const logoutfunc = (() => {
    localStorage.clear()
    navigate('/register')
    window.location.reload(false);

  })
  return (
    <div>
      <ul>
        <li><Link className='navBrandText' to = "/">QuickShare</Link></li>
        <div className='line'>
          <li><Link className='navText' to="/">Home</Link></li>
          <li><Link className='navText' to="/profile">Profile</Link></li>
          <li><div className='navText' onClick={logoutfunc}>Logout</div></li>
        </div>
      </ul>

    </div>

  )
}
