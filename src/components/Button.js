import React from 'react'
import './Button.css'

function Button({children, onHandleClick }) {
  return (
    <button className='btn' onClick={onHandleClick}>
      {children}
    </button>
  )
}

export default Button
