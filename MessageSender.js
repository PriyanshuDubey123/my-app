import { Avatar, IconButton, Modal } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './messagesender.css';
import { useStateValue } from './Stateprovider';
import { db, storage } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function MessageSender() {

  const [{user},dispatch] = useStateValue();

  const [open,setopen] = useState(false);
  const handleClose = ()=>{
    setopen(false);
  }
  const handleOpen = ()=>{
    setopen(true);
  }
  const uploadFileonClick = ()=>{
    document.getElementById('imageFile').click();
  }
  const [progress,setprogress] = useState(0);
const [image,setimage] = useState("");
const [message,setmessage] = useState("");
  const handleChange = (event)=>{
if(event.target.files[0]){
  setimage(event.target.files[0]);
}
  }

  const handleUpload = (e)=>{
e.preventDefault();
if(image===""){
  db.collection("posts").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    Message:message,
    UserName:user.displayName,
    photoUrl:user.photoUrl
  })
}
else{
const uploadTask = storage.ref(`images/${image.name}`).put(image);
uploadTask.on(
  "state_changed",
  (snapshot)=>{
  const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
  setprogress(progress);
  },
  (error)=>{
    console.log(error);
    alert(error.message);
  },
  ()=>{
    storage.ref("images").child(image.name).getDownloadURL().then(url=>{
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        Message:message,
        UserName:user.displayName,
        photoUrl:user.photoUrl,
        image:url
      })
      handleClose();
setmessage("");
setimage("");
setprogress(0);
    });
  }
)
}
setimage("");
  }

  return (
    <>
    <Modal open={open} onClose={handleClose}>
            <div className="modal-pop">
            <form action="">
              <div className="modalheading">
                <h3>Create Post</h3>
                <IconButton>
                  <CloseIcon onClick={handleClose}/>
                </IconButton>
              </div>
              <div className="modalheader-top">
                <Avatar src={user.photoUrl}/>
                <h5>{user.displayName}</h5>
              </div>
              <div className="modalBody">
                <textarea name="" id="" rows="5" placeholder="What's in your Mind..." onChange={e=>setmessage(e.target.value)}>{message}</textarea>
              </div>
              <div className="modal-footer">
                <div className="modal-footer-left">
                  <h4>Add to your post</h4>
                </div>
                <div className="modal-footer-right">
                  <IconButton onClick={uploadFileonClick}>
                   <PhotoLibraryIcon fontSize='large' style={{color:'lightgreen'}}/>
                  </IconButton>
                  <input type="file" id='imageFile' onChange={handleChange} style={{display:"none"}}/>
                  <IconButton>
                   <VideoCallIcon fontSize='large'style={{color:'red'}}/>
                  </IconButton>
                  <IconButton>
                   <InsertEmoticonIcon fontSize='large'style={{color:'orange'}}/>
                  </IconButton>
                </div>
              </div>
              {image!="" && <h2 style={{"fontSize":"15px","marginBottom":"20px","color":"orange", "justifyContent": "space-between"}}>Click on Post Buttton Please...</h2> }
              { progress!="" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>}
              <input type="submit" onClick={handleUpload} className='post-submit' value="Post"/>
            </form>
            </div>
    </Modal>
    <div className='messagesender'>
    <div className="messagesender-top">
        <Avatar src={user.photoUrl}/>

        <form action="">
            <input type="text" placeholder='आपकी अपनी खुशियां एवं समस्याएं साझा करें...' onClick={handleOpen} />
        </form>
    </div>
    <div className="messagesender-bottom">
        <div className="messengeroptions">
           <VideoCallIcon style={{color:"red"}}  fontSize="large"/>
           <p>Live Video</p>
        </div>
        <div className="messengeroptions">
           <AddToPhotosIcon style={{color:"orange"}} fontSize="large"/>
           <p>Photo/Video</p>
        </div>
        <div className="messengeroptions">
           <InsertEmoticonIcon style={{color:"green"}} fontSize="large"/>
           <p>Feeling/Activity</p>
        </div>
    </div>
    </div>
  </>
  )
}

export default MessageSender