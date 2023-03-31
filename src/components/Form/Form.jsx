import React from 'react'
import "./form.scss"
import { Input } from '../Input/Input'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Form = () => {
  return (
    <div className='form'>
      <form>
        <h1>Verification</h1>
        
       <Input type="SMS" contact="8126631758"/>
       <Input type="EMAIL" contact="arnav@gmail.com"/>
       <div className='btn'>
        <p>Entered Wrong Details? <span>Re-enter</span></p>
        <button type='submit'>Verify</button>
       </div>
        <div className='back'>
          <button><ArrowBackIosIcon className='icon'/></button>
          <p>Go back to Home</p>
        </div>
      </form>
    </div>
  )
}
