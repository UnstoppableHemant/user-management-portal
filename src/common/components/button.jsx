import React from 'react'

const Buttons = ({btnName,onClick,btnStyle,value}) => {
  return (
    <button className={btnStyle} value={value} onClick={onClick}>{btnName}</button>
  )
}

export default Buttons