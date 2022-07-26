import React from 'react'
import '/home/tatheersayed/Desktop/quickshare-team/src/css/HomePage.css'

export default function HomePage() {
  return (
    <div className='king'>
      <div className='left'></div>
    <div className='main'>
        <div className='title'>
          <input className='box' placeholder='ADD TITLE'></input>
        </div>
      <div className='title'>
        <input className='box' placeholder=' ADD IMAGE LINK'></input>
      </div>
      <div className='title'>

        <input className='box' placeholder=' ADD CAPTION'></input>
      </div>
      <div className='on'>
        <button className='button'>POST</button>
      </div>
    </div>
    </div>
    
  )
}
