import React from 'react'
import "./input.scss";

export const Input = ({type, contact}) => {
  return (
    <div className='Input'>
        <div className='sms'>
          <div className='info'>
          <h3>{type} OTP</h3>
          <span>Sent on: {contact} </span>
          </div>
          <div className='otp'>
          <input type="text" id='1' name='1digit'/>
          <input type="text" id='2' name='2digit'/>
          <input type="text" id='3' name='3digit'/>
          <input type="text" id='4' name='4digit'/>
          <input type="text" id='5' name='5digit'/>
          <input type="text" id='6' name='6digit'/>
          </div>
        </div>
    </div>
  )
}
