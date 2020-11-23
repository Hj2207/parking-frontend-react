import React from 'react'
import './form-dropdown.styles.scss'

const FormDropdown=({handleChange,label,options,name,...otherProps})=>(
    <div className='group'>
        <label> {label} </label>
         <select  name={name} onChange={handleChange} {...otherProps} >
                {options.map((option,index)=><option key={index} value={option}>{option}</option>)}      
        </select>
    </div>
)

export default FormDropdown;