import React from 'react'
import { Avatar } from '@mui/material'
import './community.css'
import Header from '../Header'
function Community() {
  return (
    <>
    <Header/>
       <div className='selling2'>
    <p>Your Community...</p>
   <div className="user-name2">
<div className="content2">
  <Avatar style={{height:"100px",width:"100px"}} src = {'https://previews.123rf.com/images/adsniks/adsniks1906/adsniks190601824/124974812-indian-farmer-at-black-mustard-field.jpg'}/>
  <p className='para'>Deepak Kourav</p>
  <p>Kareli</p>
  <p>10 km</p>
  <button>Message</button>
</div>
<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/2021-10/shutterstock_2053045187-min.jpg?h=2cf907fb&itok=vXXQtemr'}/>
  <p className='para'>Hari Om Tiwari</p>
  <p>Harrai</p>
  <p>2 km</p>
  <button>Message</button>
</div>
<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/535415377/photo/farmer-standin-in-the-mustard-field.jpg?s=612x612&w=0&k=20&c=QzSujHDN7rzcGgIxiU8B4D1Xisx1Iw-rmrzweBVyhqE='}/>
<p className='para'>Mohan Sharma</p>
  <p>Khulri</p>
  <p>3 km</p>
  <button>Message</button>
</div>
<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.shutterstock.com/image-photo/center-positioned-portrait-young-indian-260nw-2046367694.jpg'}/>
<p className='para'>Sohan Sharma</p>
  <p>Sihora</p>
  <p>6 km</p>
  <button>Message</button>
</div>
<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://www.shutterstock.com/image-photo/portrait-young-indian-farmer-wearing-260nw-1568818228.jpg'}/>
<p className='para'>Bhanu Pratap</p>
  <p>Ajanshara</p>
  <p>4 km</p>
  <button>Message</button>
</div>
<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/1186917424/photo/young-indian-farmer-on-agricultural-field-stock-photo.jpg?s=612x612&w=0&k=20&c=pmveBaaaQUIRZNt3KZJLxvrfq844Gs57IRel34ogc-A='}/>
<p className='para'>Pramod Sharma</p>
  <p>GaurJhamar</p>
  <p>8 km</p>
  <button>Message</button>
</div>

<div className="content2">
<Avatar style={{height:"100px",width:"100px"}} src = {'https://media.istockphoto.com/id/1130904205/photo/indian-rural-man-stock-images.jpg?s=612x612&w=0&k=20&c=FYY38IqukE0aJATU2SAW6iInNov0mcLNnCB8lfRmvmM='}/>
<p className='para'>Arun Dubey</p>
  <p>Baranjh</p>
  <p>100 metres</p>
  <button>Message</button>
</div>
</div>
</div>
    </>
  )
}

export default Community