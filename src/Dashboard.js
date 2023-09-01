import React from 'react'
import './Dashboard.css'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material'
import Card from './Card';
function Dashboard() {
  return (
    <div className='dashboard'>
        <h1 style={{marginBottom:20,fontSize:34,fontWeight:600}}>Candidate Assessments</h1>
        <div className='dashboard__searchpanel'>
            <div className='search__box'>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search Assessments..."/>
                    <i className="material-icons search-icon"><SearchIcon/></i>
                </div>
            </div>
            <div className='pannel__button'>
            <Button style={{backgroundColor:'rgb(192,42,132)'}}  className='button__new' variant="contained">+ Create New</Button>
            </div>
        </div>
        <div className='blocks'>
            <div className='blocks__row' style={{display:'flex',justifyContent:'space-evenly',marginBottom:30}}>
                
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className='blocks__row' style={{display:'flex',justifyContent:'space-evenly'}}>
                
            <Card/>
            <Card/>
            <Card/>
            </div>
          
        </div>
    </div>
  )
}

export default Dashboard