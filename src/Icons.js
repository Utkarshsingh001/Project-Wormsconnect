import React from 'react'

function Icons({icon}) {
  return (
    <div className='icons' style={{height:40,width:40,backgroundColor:'rgb(12,16,37)' ,alignItems:'center',marginBottom:40,borderRadius:5}}>
       <div className='icon__display' style={{alignItems:'center',textAlign:'center',alignItems:'center',paddingLeft:8}}> {icon} </div>
    </div>
  )
}

export default Icons