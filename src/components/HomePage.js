import React, { useEffect, useState } from 'react'
import '../css/HomePage.css'
import PostComponent from './PostComponent'

export default function HomePage() {
  const [addPost,setAddPost] = useState([])
  const [allPosts,setAllPosts] = useState([])
  const handleChange = ((e) => {
    setAddPost({
      ...addPost,
      [e.target.name] : e.target.value,
      "uname":localStorage.getItem('Username')
    })
  })
  
  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => setAllPosts(data))
    
  },[])
  console.log(allPosts);
  const handleSubmit = ((e) => {
    fetch('http://localhost:3000/posts',{
      method:'POST',
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(addPost)
    })
  })
  
  console.log(allPosts);
  return (
    <>
    <div>
    <div className="grid-container">
     <div className="grid-item leftGrid"></div>
     <div className="grid-item middleGridContent">
      <form className='addPostForm' onSubmit={handleSubmit}>
      <div className='row'>
          <input type = "text" className='formInputClass' name="postTitle" onChange={handleChange} placeholder="Enter Post Title" required/>
      </div>
      <div className='row'>
          <input type = "text" className='formInputClass' name="postImage" onChange={handleChange} placeholder="Enter Image Url" required/>
      </div>
      <div className='row'>
          <input type = "text" className='formInputClass' name="postClass" onChange={handleChange} placeholder="Enter Image Caption" required/>
      </div>
      <div className='row'>
        <button type="submit" className='addPostButton'>Post</button>
      </div>
      </form>
      {
         allPosts && allPosts.map((post,index) => {
         return <PostComponent key={index} title = {post.postTitle} image = {post.postImage} content = {post.postClass} uname = {post.uname} id={post.id} />
        })
      }
     </div>
     <div className="grid-item rightGrid"></div>    
    </div>
    </div>
    </>
  )
}
