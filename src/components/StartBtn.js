import React from 'react'

const StartBtn = ({handler}) => {
  return (
    <button onClick={handler} className='primary-btn'>
        <img src="./src/play.png" alt="" />
    </button>
  )
}

export default StartBtn