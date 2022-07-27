// import React from 'react'

// function MyPosts({myPosts}) {
//     const deletePost = () => {
//         fetch('http://localhost:3000/posts/'+id.toString(), { method: 'DELETE' })
//           .then(() => console.log("DELETED"));
//         window.location.reload(false);
    
//       }
//   return (
//     <div className='row postCard'>
//       <div className='row'>
//         <p className='userNameText'>{myPost.uname}</p>
//         {
//           userPost && <button className='deletePost' onClick={deletePost}>Delete</button>
//         }
//       </div>
//       <div className='row testClass'>
//           <p className='postTitleClass'>{title}</p>
//       </div>
//       <div className='row'>
//           <img src={image} className="postImageClass" alt = {title}/>
//       </div>
//       <div className='row'>
//           <p className='postContentClass'>{content}</p>
//       </div>

//     </div>
//   )
// }

// export default MyPosts