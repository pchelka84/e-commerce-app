import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
 
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitle, SignInButtonsContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [ userCredentials, setCredentials ] = useState({  email: '', password: '' })

  const { email, password } = userCredentials; 
 
  const handleSubmit = async e => {
    e.preventDefault(); 

    emailSignInStart(email, password);
  }

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value })
  } 
  
  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <SignInTitle>Sign in with your email and password</SignInTitle>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={email} 
          handleChange={handleChange} 
          label="email"
          required /> 
        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          handleChange={handleChange}
          label="password"
          required />  
        <SignInButtonsContainer>
          <CustomButton type='submit'> Sign in </CustomButton> 
          <CustomButton 
            type="button" 
            onClick={googleSignInStart} 
            isGoogleSignIn
        >
          Sign in with Google
        </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  ); 
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);