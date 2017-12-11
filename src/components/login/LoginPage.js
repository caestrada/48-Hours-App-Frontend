import React, { Component } from 'react';
import UltiLogo from '../common/UltiLogo';
import AppLogo from '../common/AppLogo';
import Label from '../common/Label';
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LoginForm from "./LoginForm";


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    console.log('e', event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  submit = (event) => {
    event.preventDefault();
  }

  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return (
      <div>
        <AppLogo />
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password',
}

export default LoginPage;