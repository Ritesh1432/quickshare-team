import React, { useEffect, useState } from 'react'
import '../css/Post.css'

function PostComponent({title,image,content,uname,id}) {
  
  const [userPost, setUserPost] = useState(false);
  useEffect(() => {
    setUserPost(localStorage.getItem('Username') === uname ? true : false);
  }, [])


  const deletePost = () => {
    fetch('http://localhost:3000/posts/'+id.toString(), { method: 'DELETE' })
      .then(() => console.log("DELETED Post with id ",id));
    window.location.reload(false);

  }

    return (
   <>
    <div className='row postCard'>
      <div className='row'>
        <p className='userNameText'>{uname}</p>
        {
          userPost && <button className='deletePost' onClick={deletePost}>DELETE </button>
        }
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