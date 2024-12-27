import React from 'react'
import "./FundForm.css"

const FundForm = () => {
  return (
    <div className='form-card'>
      <form className='form'>
        <div className='form-group'>
          <label>Name:</label>
          <input type='text' name='Name' placeholder='Enter your name' />
        </div>
        <div className='form-group'>
          <label>Phone:</label>
          <input type='text' name='Phone' placeholder='Phone number' />
        </div>
        <div className='form-group'>
          <label>Fund:</label>
          <input type='text' name='Fund' placeholder='₹' /><br/>
        </div>
        <div className='form-group'>
          <button className='pay-btn'>PROCEED TO PAY</button>
        </div>
      </form>      
    </div>
  )
}

export default FundForm
