import React from 'react'
import { Avatar } from '@mui/material';
import Header from '../Header';
import './request.css';
function Requests() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  return (
    <>
    <Header/>
    <div className = "request-main">
    <h2>Your Requests</h2>
    <br />
    <hr />
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src = {'https://previews.123rf.com/images/adsniks/adsniks1906/adsniks190601824/124974812-indian-farmer-at-black-mustard-field.jpg'}/>
          <p>Deepak Kourav</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>{time}</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src = {'https://www.preventionweb.net/sites/default/files/styles/landscape_16_9/public/2021-10/shutterstock_2053045187-min.jpg?h=2cf907fb&itok=vXXQtemr'}/>
          <p>Hari Om Tiwari</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>11:09 PM</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src={'https://media.istockphoto.com/id/535415377/photo/farmer-standin-in-the-mustard-field.jpg?s=612x612&w=0&k=20&c=QzSujHDN7rzcGgIxiU8B4D1Xisx1Iw-rmrzweBVyhqE='}/>
          <p>Mohan Sharma</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>11:09 PM</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src = {'https://www.shutterstock.com/image-photo/center-positioned-portrait-young-indian-260nw-2046367694.jpg'}/>
          <p>Sohan Verma</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>11:09 PM</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src = {'https://www.shutterstock.com/image-photo/portrait-young-indian-farmer-wearing-260nw-1568818228.jpg'}/>
          <p>Bhanu Pratap</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>11:09 PM</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    <div className="second-main">
    <div className="messagebox">
        <div className="profilecontent">
          <Avatar src = {'https://media.istockphoto.com/id/1186917424/photo/young-indian-farmer-on-agricultural-field-stock-photo.jpg?s=612x612&w=0&k=20&c=pmveBaaaQUIRZNt3KZJLxvrfq844Gs57IRel34ogc-A='}/>
          <p>Pramod Sharma</p>
        </div>
        <div className="messagedisplay">
          <p>Hamen 25 kg Gud Khareedna Hai Aapse</p>
        </div>
        <br />
        <p className='para3'>11:09 PM</p>
      </div>
      <div className="buttondiv">
      <button>Respond</button>
      <button>Delete</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Requests