import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <h1>bag o' hold</h1>
      <section id='header-btns-container'>
        <NavLink 
          to='/inventory'
          className='header-btn'
          activeClassName='header-btn-active'
        >
          Inventory
        </NavLink>
        <NavLink 
          to='/login'
          className='header-btn'
          activeClassName='header-btn-active'
        >
          Log In
        </NavLink>
        <NavLink 
          to='signup'
          className='header-btn'
          activeClassName='header-btn-active'
        >
          Sign Up
        </NavLink>
      </section>
    </header>
  )
}

export default Header