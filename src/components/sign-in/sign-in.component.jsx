import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
 
import { auth } from './../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitle, SignInButtonsContainer } from './sign-in.styles';

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
    const { googleSignInStart } = this.props;
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);