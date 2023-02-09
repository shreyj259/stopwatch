import React from 'react'

const ResetBtn = ({handler,isRunning}) => {
  return (
    <button onClick={handler} disabled={isRunning} className='secondary-btn'>
        <img src="./src/delete.png" alt="" />
    </button>
  )
}

export default ResetBtn