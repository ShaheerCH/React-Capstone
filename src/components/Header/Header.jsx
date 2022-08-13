import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <Link to='/' className='header__link'><h4>World Map</h4></Link>
      </div>

      <div className="logo__mode">
        <i className="fa-solid fa-gear"></i> Settings
      </div>
    </div>
  )
}

export default Header