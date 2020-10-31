import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SignInForm.scss'

const SignInForm = () => {
  const [usernameInput, setUsername] = useState('')
  const [passwordInput, setPassword] = useState('')

  const postLogin = () => {
    const url = ''
    const signInCredentials = {
      username: usernameInput,
      password: passwordInput
    }
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signInCredentials)
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
      <form id='sign-in-form'>
        <h1>Login</h1>
        <section className='sign-in-form-fields'>
          <label htmlFor='usernameInput'>Username:</label>
          <input 
            id='usernameInput'
            type='text'
            placeholder='Username...'
            value={usernameInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className='sign-in-form-fields'>
          <label htmlFor='passwordInput'>Password:</label>
          <input id='passwordInput'
            type='password'
            placeholder='Password...'
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
          <button id='login-btn' className='sign-in-form-btn' onClick={postLogin}>Login</button>
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

export default SignInForm