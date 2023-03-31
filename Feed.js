//     JAI SHREE RAM🙏🙏🙏

import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import './feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import { db } from './firebase'
const date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
function Feed() {

const [posts,setPosts] = useState([]);
useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
  setPosts(snapshot.docs.map(doc=>({
    id:doc.id,
    data:doc.data(),
  })))
})
},[]);

  return (
    <div className='feed'>
     <StoryReel />
     <MessageSender />
{
  posts.map(post=>{
    
    return <Post photourl = {post.data.photoUrl} image = {post.data.image} username = {post.data.UserName} timestamp = {currentDate} message = {post.data.Message} />
  })
}

    </div>
  )
}

export default Feed