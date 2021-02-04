import React, { Component } from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
 
import { signInWithGoogle } from './../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
      email: '',
      password: '' 
  }

  
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>

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
            value={this.state.email} 
            handleChange={this.handleChange}
            label="password"
            required /> 
          <CustomButton type='submit'> Sign in </CustomButton> 
          <CustomButton onClick={ signInWithGoogle }> Sign in with Google </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;