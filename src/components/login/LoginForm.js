import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

class LoginForm extends Component {
  state = { 
    user: {
      email: '',
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

  onSubmit = () => {
    const {user} = this.state;
    this.props.onSubmit(user);
    this.setState({submitted: true});
  }

  render() {
    return (
      <form>
        <TextInput
          htmlId="username"
          label="User Name"
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

        <input type="submit" value="Submit" onClick={this.onSubmit} />
      </form>
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