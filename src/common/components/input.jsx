import React from 'react'

const InputBox = ({ label, type, placeholder, name, onChange, value, min, maxLength, onInput  }) => {
    return (
        <div className='row align-items-center'>
            <div className='col-2'>
                <label className='form-label'>{label}</label>
            </div>
            <div className='col-10'>
                <input className='form-control' type={type} value={value} min={min} maxLength={maxLength} placeholder={placeholder} name={name} onChange={onChange} onInput={onInput}/>
            </div>
        </div>
    )
}

export default InputBox