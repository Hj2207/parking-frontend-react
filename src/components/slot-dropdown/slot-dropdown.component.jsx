import React from 'react'
import './slot-dropdown.styles.scss'

const SlotDropdown=({handleChange,label,options,name,...otherProps})=>(
    <div className='group'>
        <label /* className={`form-input-label`} */> {label} </label>
         <select  name={name} onChange={handleChange} {...otherProps} >
                {options.map((option,index)=><option key={index} value={option.parking_space_title}>{option.parking_space_title}</option>)}      
        </select>
    </div>
)

export default SlotDropdown;