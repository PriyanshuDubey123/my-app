import React from 'react'
import './sidebar.css'
import Sidebaroptions from './Sidebaroptions';
import { useStateValue } from './Stateprovider';

function Sidebar() {

  const [{user},dispatch] = useStateValue();

  return <div className='sidebar'>
<Sidebaroptions src={user.photoUrl} title={user.displayName}/>
<Sidebaroptions src='https://media.istockphoto.com/id/1136182862/vector/new-update-banner-template-isolated-on-white-background-vector-illustration-for-store-online.jpg?s=612x612&w=0&k=20&c=RCk5a0XmMxlR2W2XkivoQJhEuQw0-wgOiZvi2VwF_CM=' title="Your Place Updates"/>
<Sidebaroptions src='https://img.freepik.com/free-vector/people-hugging-flat-design_23-2148576539.jpg?w=2000' title="Friends"/>
<Sidebaroptions src='https://cdn2.vectorstock.com/i/1000x1000/48/86/group-of-people-icon-green-vector-18574886.jpg' title="Groups"/>
<Sidebaroptions src='https://media.istockphoto.com/id/942669742/vector/play-icon-illustration-vector-green-icon-on-transparent-background.jpg?s=170667a&w=0&k=20&c=TPK_WGRKsEMc42GDZYIQJFlugKSWDwPel37bFqws-y4=' title="Watch"/>
<Sidebaroptions src='https://img.freepik.com/free-vector/festive-calendar-event-holiday-celebration-party-work-schedule-planning-project-management-deadline-idea-office-managers-excited-colleagues_335657-1610.jpg?w=2000' title="Event"/>
<Sidebaroptions src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs6YF76LgE3k-IcpUr7RpfB34aPV0nBkTXw&usqp=CAU' title="See More"/>
  </div>
    
  
}

export default Sidebar;