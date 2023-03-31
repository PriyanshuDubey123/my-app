import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from './Stateprovider';
import { Link } from 'react-router-dom';
import Vehicle from './Vehicle';

function Header() {

const [{user},dispatch] = useStateValue();

  return (                                                                
    <div className='header'>
        <div className="header-left">
          <img src="https://st2.depositphotos.com/25708564/48330/v/600/depositphotos_483302782-stock-illustration-indian-farmer-india-map-vector.jpg" alt="image" />
          <div className="header-search">
              <SearchIcon />
              <input type="text" placeholder='Search' />
          </div>
        </div>
        <div className="header-middle">
            <div className="header__options header-option-active">
            <Link to="/"> <HomeIcon  fontSize='large' /> </Link> 
            </div>
            <div className="header__options">
             <Link to="/your-community" style={{color: "inherit" }}><Diversity3Icon fontSize='large' /></Link>
            </div>
            <div className="header__options">
          <Link to="/vehicle" element = {<Vehicle/>} style={{color: "inherit" }}> <AgricultureIcon fontSize='large' /></Link>
            </div>
            <div className="header__options">
             <InfoIcon fontSize='large' />
            </div>
        </div>
        <div className="header-right">
      <Link to="/user-profile" style={{textDecoration:"none",color:"inherit"}}>
      <div className="header__info">
        <Avatar style={{cursor:'pointer'}} src={user.photoUrl} />
        <h5>{user.displayName}</h5>
       </div>
      </Link>
       <IconButton>
        <AppsIcon className='icons'/>
        </IconButton>
        <IconButton>
        <MessageIcon className='icons'/>
        </IconButton>
        <IconButton>
        <NotificationsIcon className='icons'/>
        </IconButton>
        <IconButton>
        <KeyboardArrowDownIcon className='icons'/>
        </IconButton>
       
        </div>
    </div>
  )
}

export default Header