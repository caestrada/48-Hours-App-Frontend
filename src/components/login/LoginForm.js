import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';
import AppLogo from '../common/AppLogo';

class LoginForm extends Component {
  state = { 
    user: {
      username: '',
      password: '',
    },
    errors: {},
    submitted: false,
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  onFormSubmit = (event) => {
    const {user} = this.state;
    this.props.onSubmit(user);
    this.setState({submitted: true});
    event.preventDefault();
  }

  render() {
    const {} = this.state.user;
    return (
      <div className="form-signin card">
        <AppLogo />
        <TextInput
          htmlId="username"
          label="Username"
          name="username"
          onChange={this.onChange}
          required
        />
        <PasswordInput
          htmlId="password"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
        />
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit" onClick={this.onFormSubmit} />
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  minPasswordLength: PropTypes.number,
}

LoginForm.defaultProps = {
  minPasswordLength: 8,
}

export default LoginForm;