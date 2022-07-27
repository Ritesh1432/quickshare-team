import React from 'react'
import '../css/Post.css'

function PostComponent({title,image,content,uname}) {
  console.log(uname);
    return (
   <>
   <div className='row postCard'>
    <div className='row'>
      <p className='userNameText'>{uname}</p>  
    </div>
    <div className='row testClass'>
        <p className='postTitleClass'>{title}</p>
    </div>
    <div className='row'>
        <img src={image} className="postImageClass" alt = {title}/>
    </div>
    <div className='row'>
        <p className='postContentClass'>{content}</p>
    </div>
   </div>
   </>
  )
}

export default PostComponent