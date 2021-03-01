import React, { Component } from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
 
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, SignInButtonsContainer } from './sign-in.styles'

class SignIn extends Component {
  state = {
      email: '',
      password: '' 
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''})
    } catch(error) {
      console.log(error);
    }

  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <SignInTitle>Sign in with your email and password</SignInTitle>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="email"
            required /> 
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required />  
          <SignInButtonsContainer>
            <CustomButton type='submit'> Sign in </CustomButton> 
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> Sign in with Google </CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;