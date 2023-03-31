import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import React from 'react'
import './rightsidebar.css';

function RightSideBar() {
  return (
    <div className='right'>
      <div className="right-header">
        <div className="right-headerleft">
          <h4>Your Requests</h4>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className="right-body">
        <div className="right-bodyoptions ml10">
          <Avatar src='https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?b=1&s=170667a&w=0&k=20&c=nb9fxR6z4ztjH_Ov-3NCHPd0O5SpBwxWXmKeEd4W9pc='/>
          <h4>Hamare Khet</h4>
        </div>
        <div className="right-bodyoptions ml10">
          <Avatar src='data:image/png;base64,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'/>
          <h4>5 Notifications</h4>
        </div>
        <div className="right-bodyoptions ml10">
          <Avatar src='data:image/jpeg;base64,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'/>
          <h4>Phasal Bechen</h4>
        </div>
      </div>
      <hr /><br />
      <div className="right-header second">
        <div className="right-headerleft">
          <h4>Contacts</h4>
        </div>
        <div className="right-headerright">
        <VideocamIcon/>
        <SearchIcon/>
        <MoreHorizIcon/>

        </div>
      </div>

      <div className="right-body">
        <div className="right-bodyoptions ml10">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFmFGFzwEMKJjXG7lHjinE74U39UcvitAk0aGiLKaytyvbTZxU-gYUNwpqMUlEymqcn0&usqp=CAU'/>
          <h4>Mohan Sharma</h4>
        </div>
        <div className="right-bodyoptions ml10">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJrsb6QEFjLKoV_mROd8J3UAjpvH9ziJ_N9nN0t9bOg6Kyrbzt9d1wVgC4EJYiirsZ_A&usqp=CAU'/>
          <h4>Sohan Dixit</h4>
        </div>
        <div className="right-bodyoptions ml10">
          <Avatar src='https://www.shutterstock.com/image-vector/illustration-happy-confident-indian-farmer-260nw-1865096533.jpg'/>
          <h4>Prabhat Gupta</h4>
        </div>
        <div className="right-bodyoptions ml10">
          <Avatar src='https://static.vecteezy.com/system/resources/thumbnails/004/987/116/small/illustration-indian-farmer-on-his-farm-doing-farming-farmer-working-on-field-illustration-character-design-background-happy-farmers-day-free-vector.jpg'/>
          <h4>Raheem Khan</h4>
        </div>
        </div>

    </div>
  )
}

export default RightSideBar