import React from 'react'
import {ProgressBarLine} from 'react-progressbar-line'


function Progressline() {
  return (
    <ProgressBarLine
    value={50}
    min={0}
    max={100}
    strokeWidth={1}
    trailWidth={1}
    styles={{
      path: {
        stroke: '#17b978'
      },
      trail: {
        stroke: '#a7ff83'
      },
      text: {
        fill: '#404040',
        textAlign: 'center',
        display:'none'

      }
    }}
  />
  )
}

export default Progressline