import React from 'react'

const Buttons = ({btnName,onClick,btnStyle}) => {
  return (
    <button className={btnStyle}>{btnName}</button>
  )
}

export default Buttons