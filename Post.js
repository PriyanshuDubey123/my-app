import React from 'react'
import './post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import './Feed'

function Post({photourl, image, username, timestamp, message}) {
  return (
    <div className='post'>
      <div className="post-top">
        <div className="post-topleft">
       <Avatar src={photourl}/>
       <div className="postinfo">
        <h4>{username}</h4>
        <p>{timestamp}<PublicIcon/></p>
       </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="postmiddle">
        <p>{message}</p>
        {image && <img src={image} alt="" />}
      </div>
      <div className="post-bottom">
         <div className="bottomoptions">
            <ThumbUpIcon/><p>Like</p>
         </div>
         <div className="bottomoptions">
            <ChatBubbleOutlineIcon/><p>Comment</p>
         </div>
         <div className="bottomoptions">
            <ShareIcon/><p>Share</p>
         </div>
      </div>
    </div>
  )
}

export default Post