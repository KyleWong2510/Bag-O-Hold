import React, { useState } from 'react'
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

  return (
    <>
      <form id='sign-in-form'>
        <section id='username-input-container'>
          <label htmlFor='usernameInput'>Username:</label>
          <input 
            id='usernameInput'
            type='text'
            placeholder='Username...'
            value={usernameInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section id='password-input-container'>
          <label htmlFor='passwordInput'>Password:</label>
          <input id='passwordInput'
            type='password'
            placeholder='Password...'
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button onClick={postLogin}>Login</button>
      </form>
    </>
  )
}

export default SignInForm