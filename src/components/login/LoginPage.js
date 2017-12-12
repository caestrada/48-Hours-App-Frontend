import React, { Component } from 'react';
import UltiLogo from '../common/UltiLogo';
import Label from '../common/Label';
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    console.log('e', event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (user) => {
    console.log(user);
    
    // check with backend then redirect!
    this.props.history.push('/home');
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
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