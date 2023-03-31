import React from 'react'
import Header from '../Header'
// import './post.css';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';


function cultivator() {
  return (
    <div>

    <Header/>
    <div className='post'>
      <div className="post-top">
        <div className="post-topleft">
       <Avatar src={'data:image/jpeg;base64,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'}/>
       <div className="postinfo">
        <h4>Hariya Singh (7km away from you)</h4>
        <p>29/03/2023<PublicIcon/></p>
       </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="postmiddle">
        <p>Cultivator is Available</p>
         <img src='https://img1.exportersindia.com/product_images/bc-full/2020/2/5710880/cultivators-1581508355-5296128.jpeg' alt="" />
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
    <div className='post'>
      <div className="post-top">
        <div className="post-topleft">
       <Avatar src={'https://media.istockphoto.com/id/152943753/photo/indian-farmer.jpg?s=170667a&w=0&k=20&c=P-E2WkXVuo6OjJlvLs2eteRfiO4Ak-B8Lv2HZwPaWrU='}/>
       <div className="postinfo">
        <h4>Bhanu Patel    (5km away from you)</h4>
        <p>29/03/2023<PublicIcon/></p>
       </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="postmiddle">
        <p>Cultivator is Available</p>
         <img src='https://i.ytimg.com/vi/OvVx-BP9LKo/sddefault.jpg' alt="" />
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
    </div>
  )
}

export default cultivator