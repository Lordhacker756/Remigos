import React from 'react'
import remigos from "../assets/remigos.png"
import "../index.css"

const Header = () => {
  return (
    <div className='header__container'>
        <img className='header__icon' src={remigos} alt="" />
    </div>
  )
}

export default Header