import React from 'react';
import SignUpForm from './SignUpForm';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('SignUpForm', () => {
  it('should render a header, labels, inputs, and a btn', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<BrowserRouter><SignUpForm /></BrowserRouter>);
    const header = getByText('Sign Up');
    const firstNameLabel = getByText('First Name:');
    const firstNameInput = getByPlaceholderText('First Name...');
    const lastNameLabel = getByText('Last Name:');
    const lastNameInput = getByPlaceholderText('Last Name...');
    const usernameLabel = getByText('Username:');
    const usernameInput = getByPlaceholderText('Username...');
    const passwordLabel = getByText('Password:');
    const passwordInput = getByPlaceholderText('Password...');
    const confirmPasswordLabel = getByText('Confirm Password:');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password...');
    const signUpBtn = getByRole('button', 'Sign Up!');  

    expect(header).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameLabel).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordLabel).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(signUpBtn).toBeInTheDocument();
  });

  it('should change the text in the input fields when typing', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<BrowserRouter><SignUpForm /></BrowserRouter>);
    const firstNameInput = getByPlaceholderText('First Name...');
    const lastNameInput = getByPlaceholderText('Last Name...');
    const usernameInput = getByPlaceholderText('Username...');
    const passwordInput = getByPlaceholderText('Password...');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password...');

    fireEvent.change(firstNameInput, { target: { value: 'Test First Name' }});
    fireEvent.change(lastNameInput, { target: { value: 'Test Last Name' }});
    fireEvent.change(usernameInput, { target: { value: 'Test Username' }});
    fireEvent.change(passwordInput, { target: { value: 'Test Password' }});
    fireEvent.change(confirmPasswordInput, { target: { value: 'Test Confirm Password' }});

    const newFirstNameInput = getByDisplayValue('Test First Name')
    const newLastNameInput = getByDisplayValue('Test Last Name')
    const newUsernameInput = getByDisplayValue('Test Username')
    const newPasswordInput = getByDisplayValue('Test Password')
    const newConfirmPasswordInput = getByDisplayValue('Test Confirm Password')

    expect(newFirstNameInput).toBeInTheDocument();
    expect(newLastNameInput).toBeInTheDocument();
    expect(newUsernameInput).toBeInTheDocument();
    expect(newPasswordInput).toBeInTheDocument();
    expect(newConfirmPasswordInput).toBeInTheDocument();
  });
})