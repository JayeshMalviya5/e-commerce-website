import React from 'react'
import './Input.css'
function Input({lable, name, value, onChange, type}) {
  return (
    <div className='input-container'>
        <div className="input-lable">{lable}</div>
        <div className="input-body">
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    </div>
  )
}

export default Input