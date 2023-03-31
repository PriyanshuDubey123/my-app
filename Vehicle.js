import React from 'react'
import Header from './Header'
import './vehicle.css';
import './index.css';
import { Link } from 'react-router-dom';

function Vehicle() {
  return (
    <div className="vehicle">
    <Header />
    <div className="main">
<div className="heading">
<h2>-: Select from the Equipments given below :-</h2>
</div>
    <div className="container1">
     <Link to="/tractor"><div className="veh" style={{backgroundImage:`url('https://www.sonalika.com/media/product-thumbnail/tiger-75--1639819517.png')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
      <div className="text">
        <p>Tractor</p>
      </div>
      </div></Link> 
      <Link to="/cultivator">
      <div className="veh" style={{backgroundImage:`url('https://img1.exportersindia.com/product_images/bc-full/2020/2/5710880/cultivators-1581508355-5296128.jpeg')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
      <div className="text">
        <p>Cultivator</p>
      </div>
      </div>
      </Link>
      <div className="veh" style={{backgroundImage:`url('https://img3.exportersindia.com/product_images/bc-full/dir_59/1740018/seed-drill-432957.jpg')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
      <div className="text">
        <p>Seed Drill</p>
      </div>
      </div>
      <div className="veh"style={{backgroundImage:`url('https://www.nibsm.org.in/wp-content/uploads/2022/05/TH.png')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
      <div className="text">
        <p>Thresor</p>
      </div>
      </div>

    </div>
    <div className="container2">
    <div className="veh"style={{backgroundImage:`url('https://media.istockphoto.com/id/458307297/photo/john-deere-combine.jpg?s=612x612&w=0&k=20&c=SUIosnDYn7CW2gsgPFffU2MeZJ8BYsmcZJjQg4-UR18=')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
    <div className="text">
        <p>Harvestor</p>
      </div>
</div>
<div className="veh" style={{backgroundImage:`url('https://img.agriexpo.online/images_ag/photo-mg/169501-16264039.jpg')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
<div className="text">
        <p>Rotarvator</p>
      </div>
</div>
<div className="veh" style={{backgroundImage:`url('https://i.ytimg.com/vi/ZkQS_mL7EoU/maxresdefault.jpg')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
<div className="text">
        <p>Trolly</p>
      </div>
</div>
<div className="veh" style={{backgroundImage:`url('https://www.agricosrotarytiller.com/images/products/double-bottom-hydraulic-plough.jpg')`,backgroundPosition:"center", backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
<div className="text">
        <p>Plough</p>
      </div>
</div>
    </div>
    </div>
   </div>
  )
}

export default Vehicle