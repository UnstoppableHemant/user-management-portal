import React from 'react'

const InputBox = ({ label, type, placeholder, name, onChange }) => {
    return (
        <div className='row align-items-center'>
            <div className='col-2'>
                <label className='form-label'>{label}</label>
            </div>
            <div className='col-10'>
                <input className='form-control' type={type} placeholder={placeholder} name={name} onChange={onChange} />
            </div>
        </div>
    )
}

export default InputBox