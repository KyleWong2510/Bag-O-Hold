import React, { useState } from 'react'
import './SignUpForm.scss'

const SignUpForm = () => {
  const [firstNameInput, setFirstName] = useState('')
  const [lastNameInput, setLastName] = useState('')
  const [emailInput, setEmail] = useState('')
  const [usernameInput, setUsername] = useState('')
  const [passwordInput, setPassword] = useState('')
  const [confirmedPasswordInput, setConfirmedPassoword] = useState('')

  const postSignUp = () => {
    const url = ''
    const signUpData = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
      first_name: firstNameInput,
      last_name: lastNameInput
    }
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpData)
    })
      .catch(err => console.error(err))
  }

  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <section>
          <label>First Name:</label>
          <input 
            type='text'
            placeholder='First Name...'
            value={firstNameInput}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </section>
        <section>
          <label>Last Name:</label>
          <input 
            type='text'
            placeholder='Last Name...'
            value={lastNameInput}
            onChange={(e) => setLastName(e.target.value)}
          />
        </section>
        <section>
          <label>Email:</label>
          <input 
            type='text'
            placeholder='Email Address...'
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label>Username:</label>
          <input 
            type='text'
            placeholder='Username...'
            value={usernameInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section>
          <label>Password:</label>
          <input 
            type='password'
            placeholder='Password...'
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <label>Confirm Password:</label>
          <input 
            type='password'
            placeholder='Confirm Password...'
            value={confirmedPasswordInput}
            onChange={(e) => setConfirmedPassoword(e.target.value)}
          />
        </section>
        <button onClick={postSignUp}>Sign Up!</button>
      </form>
    </>
  )
}

export default SignUpForm