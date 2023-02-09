import React from 'react'

const LapBtn = ({handler,isRunning}) => {
  return (
    <button disabled={!isRunning} onClick={handler} className='primary-btn'>
        <img src="./src/flag.png" alt="" />
    </button>
  )
}

export default LapBtn