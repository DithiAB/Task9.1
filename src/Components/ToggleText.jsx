import React from 'react'
import { useToggle } from './useToggle'
import './Toggle.css'
const ToggleText = () => {
    const{show,toggle}= useToggle(false)
  return (
    <div className='main'>
      {show && <div className='sub'><i>If you want to shine like a sun, first burn like a sun. ... </i></div>}
      <button onClick={toggle}>Read Me</button>
    </div>
  )
}

export default ToggleText
