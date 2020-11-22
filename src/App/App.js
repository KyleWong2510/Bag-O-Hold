import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import CreateCharacterForm from '../CreateCharacterForm/CreateCharacterForm'
import Layout from '../Layout/Layout'
import LogInForm from '../LogInForm/LogInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

const App = () => {
  return (
    <main>
      {/* <Route path='/'>
        <Home />
      </Route> */}
      <Route path='/login'>
        <Layout 
          content={<LogInForm />}
        />
      </Route>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
    </main>
  )
}

export default App;
