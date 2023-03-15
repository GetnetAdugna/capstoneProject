import React from 'react'
import './form-input.styles.scss'

function formInput({label,...otherData}) {
  return (
    <div className='group'>
        <input className='form-input'  {...otherData}/>
        { 
        label&&(

            <label className={`${otherData.value.length ? 'shrink':''} form-input-label`}> {label} </label>

            )
        }


    </div>
  )  
}

export default formInput