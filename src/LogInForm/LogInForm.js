import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './LogInForm.scss'

const LogInForm = () => {
  const [usernameInput, setUsername] = useState('')
  const [passwordInput, setPassword] = useState('')

  const isEnabled = usernameInput.trim() === '' || passwordInput.trim() === ''

  const postLogin = () => {
    const url = ''
    const logInCredentials = {
      username: usernameInput,
      password: passwordInput
    }
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(logInCredentials)
    })
      .catch(err => console.error(err))
  }

  const matchCredentials = () => {
    // if( bad response from login) {
    //   return <p>*** The username or password you entered is incorrect ***</p>
    // }
  }

  return (
    <>
      <form id='log-in-form'>
        <h1>Log In</h1>
        <section className='log-in-form-fields'>
          <label htmlFor='usernameInput'>Username:</label>
          <input 
            id='usernameInput'
            type='text'
            placeholder='Username...'
            value={usernameInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className='log-in-form-fields'>
          <label htmlFor='passwordInput'>Password:</label>
          <input id='passwordInput'
            type='password'
            placeholder='Password...'
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
          <button 
            id='login-btn' 
            onClick={postLogin} 
            disabled={isEnabled}
          >
            Login
          </button>
          <NavLink 
            to='/signup'
            className='navlink'
          >
            Don't have an account? Sign up here!
          </NavLink>
        <section className='form-error'></section>
      </form>
    </>
  )
}

export default LogInForm