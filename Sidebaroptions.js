import { Avatar } from '@mui/material';
import React from 'react';
import './sidebaroptions.css';

function Sidebaroptions({src,Icon,title}) {
  return (
    <div className='sidebar-row'>
    <Avatar src={src}/>
    <p>{title}</p>
    </div>
  )
}

export default Sidebaroptions;