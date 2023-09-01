import React from 'react'
import './Card.css'
import { Button } from '@mui/material'
import {ProgressBarLine} from 'react-progressbar-line'
import Progressline from './Progressline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function Card() {
  return (
    <div className='card'>
        
  <div class="card">
    <div class="card-content">
        <div className='card__block1' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h3 style={{fontWeight:600,fontSize:24}}>Code-Hackathon</h3>
            <Button style={{color:'rgb(192,42,132)',width:90,textTransform:'none'}} color='error' className='button__new' variant="outlined">View</Button>

        </div>
        <p style={{color: '#777',fontSize:14,fontWeight:400}}>Pranathi,10 Nov'22</p>
        <div className='card__block2' style={{ marginTop: 20, color: 'white', alignItems: 'flex-start' }}>
  <div className='block2row' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
    <div className='block2col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>Invited</p>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>120</p>
    </div>
    <div className='block2col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p style={{ margin: 0 ,fontSize:14,fontWeight:500}}>Dropped off</p>
      <p style={{ margin: 0,fontSize:14,fontWeight:500}}>03</p>
    </div>
  </div>
  {/* **********************2****************** */}
  <div className='block2row' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '10px' }}>
    <div className='block2col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>Evaluated</p>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>100</p>
    </div>
    <div className='block2col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>Qualified</p>
      <p style={{ margin: 0,fontSize:14,fontWeight:500 }}>90</p>
    </div>
  </div>
</div>

        <div className='card__block3' style={{marginTop:10}}>
            <p style={{color:`${'rgb(90,181,150)'}`,fontSize:12,fontWeight:400}}>Qualifying</p>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Progressline />
            <p style={{marginLeft:30,fontSize:15,fontWeight:500}}>70%</p>
            </div>
        </div>



        <div className='card__block4' style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
            <div className='block__left' style={{display:'flex'}}>
                <div style={{alignItems:'center',marginRight:15,justifyContent:'center',textAlign:'center'}}>
                    <ContentCopyIcon style={{height:20}} />
                        <p style={{fontSize:12,fontWeight:12}}>Duplicate</p>
                </div>
                <div style={{alignItems:'center',textAlign:'center'}}>
                    <InsertLinkIcon style={{height:20}}/>
                    <p style={{fontSize:12,fontWeight:12}}>Copy link</p>
                </div>
            </div>
            <div className='block__right' style={{alignItems:'center',}}>
            <div className='toggle_box'>
             <div class="toggle">
        <div class="slider"></div>
        </div>
            </div>
            </div>
        </div>

    </div>

</div>
    </div>
  )
}

export default Card