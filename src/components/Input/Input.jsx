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
          <input type="text" maxLength="1" id='1' name='1digit'/>
          <input type="text" maxLength="1" id='2' name='2digit'/>
          <input type="text" maxLength="1" id='3' name='3digit'/>
          <input type="text" maxLength="1" id='4' name='4digit'/>
          <input type="text" maxLength="1" id='5' name='5digit'/>
          <input type="text" maxLength="1" id='6' name='6digit'/>
          </div>
        </div>
    </div>
  )
}
