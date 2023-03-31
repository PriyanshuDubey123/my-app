import React from 'react'
import './profile.css'
import Header from '../Header'
import { Avatar } from '@mui/material'
import { useStateValue } from '../Stateprovider';
import { fontSize } from '@mui/system';
import { Link } from 'react-router-dom';

function Profile() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="main2">

    <Header />
    <div className="main3">
    <Avatar style={{height:"200px",width: "200px"}} src= 'https://t3.ftcdn.net/jpg/03/70/47/26/360_F_370472691_KocGklwOPAyLcutco4zJp9g1004Puxy4.jpg'/>
    <div className="info">
      <p style={{fontWeight:"bolder", fontSize:"30px"}}>{user.displayName}</p>
    </div>
    <div className="options1">
<Link to="/" style={{color:"inherit"}}>
<div className="valuebox" id='val1'>
<Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaAYnjnKkAAm3C-NhMKA3L5S9F-j0QTDaLw&usqp=CAU'} />
  <p>Your Posts</p>
</div></Link>
<Link to='/selling-portal' style={{color:"inherit"}}>
<div className="valuebox" id='val2' >
<Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src = {'https://www.clipartmax.com/png/middle/215-2154568_add-to-cart-point-of-sell-icon-png.png'} />
  <p>Selling Portal</p>

</div>
</Link>
<Link to="/your-community" style={{color:"inherit"}}>
<div className="valuebox " id='val3'>
<Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src={'data:image/png;base64,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'}/>
  <p>Your Community</p>
</div>
</Link>
    </div>
    <div className="options2">
<Link to="/your-requests" style={{color:"inherit"}}>
<div className="valuebox" id='val4'>
    <Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src = {'https://w7.pngwing.com/pngs/56/956/png-transparent-friend-request-network-one-one-friend-request-1-facebook-ui-flat-icon.png'} />
  <p>Request Received</p>
</div>
</Link>
<Link to = "/announcement" style={{color:"inherit"}}>
<div className="valuebox">
<Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src={'https://cdn2.iconfinder.com/data/icons/business-round-icons/500/advertising-512.png'} />
  <p>Logoon ko Kaam par rakhna hai</p>
</div>
</Link>
<Link to="/Sell" style={{color:"inherit"}}>
<div className="valuebox">
<Avatar style={{height:"80px",width: "80px",marginTop:"10px"}} src={'https://cdn-icons-png.flaticon.com/512/1771/1771364.png'}/>
  <p>Samaan Kiraay se Dena hai</p>
</div>
</Link>
    </div>
    </div>
    </div>
  )
}

export default Profile