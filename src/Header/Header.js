import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <h1>bag o' hold</h1>
      <NavLink>Log In</NavLink>
      <NavLink>Sign Up</NavLink>
    </header>
  )
}

export default Header