import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <h1>bag o' hold</h1>
      <NavLink to='/login'>Log In</NavLink>
      <NavLink to='signup'>Sign Up</NavLink>
    </header>
  )
}

export default Header