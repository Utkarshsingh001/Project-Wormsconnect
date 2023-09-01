import React from 'react'
import './Header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ToggleTheme from './Toggle';

function Header() {
  return (
    <div className='header'>

             <div className='left__panel'>
             
             </div>

        <div className='right__panel'>
        <div className='header__switch' style={{paddingRight:20}}>
            <ToggleTheme/>
        </div>
        <div className='header__bell' style={{paddingRight:20}}>
            <NotificationsIcon/>
        </div>
        <div className='header__loginAvatar' >
            <h3 style={{paddingRight:10,fontSize:16,fontWeight:500,lineHeight:24,fontStyle:"poppins"}}>Jessica James</h3>
            <img style={{marginRight:15}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQb_iRa5MSqSYyJiV9a_qivac6A8Vav4L0COesTFk&s' alt='profilepicture'/>
            
        </div>
        <KeyboardArrowDownIcon/>
        </div>
    </div>
  )
}

export default Header