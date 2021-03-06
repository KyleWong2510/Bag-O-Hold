import React, { useState } from 'react'
import './SignUpForm.scss'

const SignUpForm = () => {
  const [firstNameInput, setFirstName] = useState('')
  const [lastNameInput, setLastName] = useState('')
  const [emailInput, setEmail] = useState('')
  const [usernameInput, setUsername] = useState('')
  const [passwordInput, setPassword] = useState('')
  const [confirmedPasswordInput, setConfirmedPassoword] = useState('')

  const fieldsEmpty = 
    firstNameInput.trim() === '' ||
    lastNameInput.trim() === '' ||
    usernameInput.trim() === '' ||
    passwordInput.trim() === '' ||
    confirmedPasswordInput.trim() === ''

  const isEnabled = () => {
    if (!fieldsEmpty && passwordInput === confirmedPasswordInput) {
      return true
    } else return false
  }

  const matchPasswords = () => {
    passwordInput !== confirmedPasswordInput && 
      <p>*** Your passwords do not match ***</p>
  }

  const matchUsernames = () => {
    //if username is already taken alert like above
  }
  
  const postSignUp = () => {
    const url = ''
    const signUpData = {
      username: usernameInput,
      email: emailInput || null,
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
      <form id='sign-up-form'>
        <h1>Sign Up</h1>
        <section className='sign-up-form-fields'>
          <label htmlFor='firstNameInput'>First Name:</label>
          <input 
            id='firstNameInput'
            type='text'
            placeholder='First Name...'
            value={firstNameInput}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </section>
        <section className='sign-up-form-fields'>
          <label htmlFor='lastNameInput'>Last Name:</label>
          <input 
            id='lastNameInput'
            type='text'
            placeholder='Last Name...'
            value={lastNameInput}
            onChange={(e) => setLastName(e.target.value)}
          />
        </section>
        <section className='sign-up-form-fields'>
          <label htmlFor='emailInput'>Email:</label>
          <input 
            id='emailInput'
            type='text'
            placeholder='Email Address...'
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className='sign-up-form-fields'>
          <label htmlFor='newUsernameInput'>Username:</label>
          <input 
            id='newUsernameInput'
            type='text'
            placeholder='Username...'
            value={usernameInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className='sign-up-form-fields'>
          <label htmlFor='newPasswordInput'>Password:</label>
          <input 
            id='newPasswordInput'
            type='password'
            placeholder='Password...'
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section className='sign-up-form-fields'>
          <label htmlFor='newConfirmedPasswordInput'>Confirm Password:</label>
          <input 
            id='newConfirmedPasswordInput'
            type='password'
            placeholder='Confirm Password...'
            value={confirmedPasswordInput}
            onChange={(e) => setConfirmedPassoword(e.target.value)}
          />
        </section>
        <button 
          id='sign-up-btn' 
          disabled={!isEnabled()}
          onClick={postSignUp}
        >
          Sign Up!
        </button>
        <section className='form-error'>
          {matchPasswords()}
        </section>
      </form>
    </>
  )
}

export default SignUpForm