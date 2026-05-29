import React from 'react'
import "./SqaureButton.css"

const SqaureButton = ({text, icon, onClick, style}) => {
  return (
    <button className='square-btn' onClick={onClick} style={style}>
        {text}
        {icon}
    </button>
  )
}

export default SqaureButton