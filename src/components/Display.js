import React from 'react'

const Display = ({hours,minutes,seconds,milliSeconds}) => {
  return (
    <div className='display'>
        {hours<10?`0${hours}`:hours}
        <span className='orange'>:</span>
        {minutes<10?`0${minutes}`:minutes}
        <span className='orange'>:</span>
        {seconds<10?`0${seconds}`:seconds}
        <span className='orange'>.</span>
        {milliSeconds<100?milliSeconds<10?`00${milliSeconds}`:`0${milliSeconds}`:milliSeconds}
    </div>
  )
}

export default Display