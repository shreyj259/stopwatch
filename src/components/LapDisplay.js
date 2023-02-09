import React from 'react'

export const  LapDisplay = ({index,hours,minutes,seconds,milliSeconds}) => {
  return (
    <div className="lap-display d-flex">
        <div>{index<10?`0${index}`:index}</div>
        <div>-</div>
        <div>{hours<10?`0${hours}`:hours}
        <span className='orange'>:</span>
        {minutes<10?`0${minutes}`:minutes}
        <span className='orange'>:</span>
        {seconds<10?`0${seconds}`:seconds}
        <span className='orange'>.</span>
        {milliSeconds<100?milliSeconds<10?`00${milliSeconds}`:`0${milliSeconds}`:milliSeconds}</div>
    </div>
  )
}
