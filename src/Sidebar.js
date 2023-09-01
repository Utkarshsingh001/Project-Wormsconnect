import { red } from '@mui/material/colors'
import React from 'react'
import './Sidebar.css'
import Icons from './Icons'
import WindowIcon from '@mui/icons-material/Window';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import DnsIcon from '@mui/icons-material/Dns';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar__container' style={{marginTop:30,alignItems:'center',alignItems:'center',paddingLeft:30,paddingRight:-30}}>
    <div className='icons' style={{height:40,width:40,backgroundColor:'rgb(12,16,37)' ,alignItems:'center',marginBottom:40,borderRadius:5}}>
       <div className='icon__display' style={{alignItems:'center',textAlign:'center',alignItems:'center',paddingLeft:10,paddingBottom:4}}> [z] </div>
    </div>
        <Icons style={{alignItems:'center',}} icon={<WindowIcon/>}/>
        <Icons style={{alignItems:'center'}} icon={<EditNoteIcon/>}/>
        <Icons style={{alignItems:'center'}} icon={<DescriptionIcon/>}/>
        <Icons style={{alignItems:'center'}} icon={<DnsIcon/>}/>
        <Icons style={{alignItems:'center'}} icon={<SettingsIcon/>}/>
    </div>
    </div>
  )
}

export default Sidebar