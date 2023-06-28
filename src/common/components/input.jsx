import React from 'react'

const InputBox = ({ label, labelStyle, inputStyle, type, placeholder, name, onChange, value, min, maxLength, onInput  }) => {
    return (
        <div className='row align-items-center'>
            <div className={`${labelStyle}`}>
                <label className='form-label'>{label}</label>
            </div>
            <div className={`${inputStyle}`}>
                <input className='form-control' type={type} value={value} min={min} maxLength={maxLength} placeholder={placeholder} name={name} onChange={onChange} onInput={onInput}/>
            </div>
        </div>
    )
}

export default InputBox