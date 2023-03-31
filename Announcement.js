import React, { useState } from 'react'
import { Avatar, IconButton, Modal } from '@mui/material'
import Header from '../Header';
import './announcement.css';
import './Selling.css'
import CloseIcon from '@mui/icons-material/Close';


function Announcement() {
const [open, setopen] = useState(false);
const handlepost = () =>{
  setopen(true);
}
const handleclose = ()=>{
  setopen(false);
}

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  return (
    <>
<Modal open = {open} onClose={handleclose} className = "modeldiv">
  <div className="modalname">
    <div className="modalheading">
      <Avatar/>
      <p>Priyanshu Dubey</p>
       <div className="closediv">
       <CloseIcon onClick = {handleclose}/>
       </div>
    </div>
    <div className="centerdiv">
    <h2>Mention about your work</h2>
      <textarea name="" id="" rows="5"></textarea>
      <button onClick={handleclose}>Post</button>
    </div>
  </div>
</Modal>
    <Header/>
    <div className = "request-main2">
    <h2>Peoples who are available for work</h2>
    <br />
    <hr />
    <div className="user-name">
<div className="content">
  <Avatar style={{height:"100px",width:"100px"}} src = {'https://previews.123rf.com/images/adsniks/adsniks1906/adsniks190601824/124974812-indian-farmer-at-black-mustard-field.jpg'}/>
  <p className='para'>Deepak Kourav</p>
  <p>Kareli</p>
  <p>10 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/2021-10/shutterstock_2053045187-min.jpg?h=2cf907fb&itok=vXXQtemr'}/>
  <p className='para'>Hari Om Tiwari</p>
  <p>Harrai</p>
  <p>2 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/535415377/photo/farmer-standin-in-the-mustard-field.jpg?s=612x612&w=0&k=20&c=QzSujHDN7rzcGgIxiU8B4D1Xisx1Iw-rmrzweBVyhqE='}/>
<p className='para'>Mohan Sharma</p>
  <p>Khulri</p>
  <p>3 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.shutterstock.com/image-photo/center-positioned-portrait-young-indian-260nw-2046367694.jpg'}/>
<p className='para'>Sohan Verma</p>
  <p>Sihora</p>
  <p>6 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.shutterstock.com/image-photo/portrait-young-indian-farmer-wearing-260nw-1568818228.jpg'}/>
<p className='para'>Bhanu Pratap</p>
  <p>Ajanshara</p>
  <p>4 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/1186917424/photo/young-indian-farmer-on-agricultural-field-stock-photo.jpg?s=612x612&w=0&k=20&c=pmveBaaaQUIRZNt3KZJLxvrfq844Gs57IRel34ogc-A='}/>
<p className='para'>Pramod Sharma</p>
  <p>GaurJhamar</p>
  <p>8 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src ={'https://us.123rf.com/450wm/stockimagesbank/stockimagesbank2012/stockimagesbank201200080/160254958-happy-indian-farmer-in-agricultural-field-outdoor.jpg?ver=6'}/>
<p className='para'>Sgar Dixit</p>
  <p>Panari</p>
  <p>9 km</p>
</div>
<div className="content">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/1130904205/photo/indian-rural-man-stock-images.jpg?s=612x612&w=0&k=20&c=FYY38IqukE0aJATU2SAW6iInNov0mcLNnCB8lfRmvmM='}/>
<p className='para'>Arun Dubey</p>
  <p>Baranjh</p>
  <p>100 metres</p>
</div>

   </div>
   <br /><hr /><br />
   <div className="posting">
    <h2>Select from the above Peoples   <p>else</p>
    <button onClick={handlepost}>Post your Work Profile</button> <br /><br /></h2>
  
   </div>
    </div>
    </>
  )
}

export default Announcement
