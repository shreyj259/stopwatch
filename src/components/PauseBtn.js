import React from 'react'

const PauseBtn = ({handler}) => {
  return (
    <button onClick={handler} className='primary-btn'>
        <img src="./src/pause.png" alt="" />
    </button>
  )
}

export default PauseBtn