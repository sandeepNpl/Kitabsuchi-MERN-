import React from 'react';
import './button.css'

const Button = (props) => {
  return (
    <div>
      <button className='btn' type='{props.type}'>{props.name}</button>
    </div>
  )
}

export default Button
