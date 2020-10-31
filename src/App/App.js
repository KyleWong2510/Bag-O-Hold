import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import CreateCharacterForm from '../CreateCharacterForm/CreateCharacterForm'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

const App = () => {
  return (
    <main>
      {/* <Route path='/'>
        <Home />
      </Route> */}
      <Route path='/signin'>
        <SignInForm />
      </Route>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
    </main>
  )
}

export default App;
