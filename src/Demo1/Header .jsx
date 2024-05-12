import React from 'react'
import D1 from '../assets/h4.png'
import D2 from '../assets/do2.png'

const Header  = () => {
  return (
    <div className='headermain shadow'>
    <div> <img src={D2} className='imgsetd' /> </div>
    <div className='textsetheader'>  
    <h1>We Provide <br /> <span> Meadical </span> Service</h1> 
    <p>We Provide alwase best provi Meadical Service for our client aur servicer our client aur servicer</p>
    <button className='btn  btn-danger'>Make an Apoinment</button>
    </div>
    <div> <img src={D1} className='imgsetdl' /> </div>
    </div>
  )
}

export default Header 