import React from 'react';
import LogInForm from './LogInForm';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Log In Form', () => {
  it('should render a header, inputs, a button, and a navlink', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<BrowserRouter><LogInForm /></BrowserRouter>);
    const header = getByText('Log In');
    const nameLabel = getByText('Username:');
    const nameInput = getByPlaceholderText('Username...');
    const passwordLabel = getByText('Password:');
    const passwordInput = getByPlaceholderText('Password...');
    const loginBtn = getByRole('button', 'Login');
    const navLink = getByText('Don\'t have an account? Sign up here!');

    expect(header).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
  })

  it('should change the text in the input fields when typing', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<BrowserRouter><LogInForm /></BrowserRouter>);
    const nameInput = getByPlaceholderText('Username...');
    const passwordInput = getByPlaceholderText('Password...');
    fireEvent.change(nameInput, { target: { value: 'Test Name'}})
    fireEvent.change(passwordInput, { target: { value: 'Password'}})
    const newName = getByDisplayValue('Test Name')
    const passwordName = getByDisplayValue('Password')
    expect(newName).toBeInTheDocument()
    expect(passwordName).toBeInTheDocument()
  })

  //button fire event on click
})