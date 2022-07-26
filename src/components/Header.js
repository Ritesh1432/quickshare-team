import React from 'react'
import '../css/Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul>
        <li class="active"><Link href='#'>QuickShare</Link></li>
        <div className='line'>
        <li><Link href='#'>Home</Link></li>
        <li><Link href='#'>Profile</Link></li>
        <li><Link href='#'>Logout</Link></li>
        </div>
      </ul>

    </div>

  )
}
