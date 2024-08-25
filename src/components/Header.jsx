import React from 'react'
import {Link, NavLink } from 'react-router-dom'
const Header = () => {
    const linkStyles = {
        fontWidth:'15px',
        color:'red',
        textDecoration:'underline'
    }
  return (
    <div>
     <header className='main-header d-flex justify-content-between p-3 '>
    <Link 
    
    to=".">#MY 15 DAYS OF REACT</Link>
    <nav className='nav'>
      <NavLink 
      style={({isActive}) => isActive ? linkStyles: null}
      
      to="about">About me</NavLink>
      <NavLink
      style={({isActive}) => isActive ? linkStyles: null}
      
      to="days">Days I spent</NavLink>
    </nav>
    </header>

    </div>
  )
}

export default Header
