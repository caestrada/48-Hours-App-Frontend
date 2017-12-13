import React, { Component } from 'react';
import UltiLogo from '../common/UltiLogo';
import Label from '../common/Label';
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../actions';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isAuthenticated: false,
  }

  componentDidMount = () => {
    if(this.state.isAuthenticated) {
      this.props.history.push('/home');
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onSubmit = (user) => {
    this.props.loginUser(user)
    .then(auth => {
      this.props.history.push('/home');
    })
    .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="login-wrapper">
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

/** 
 * The 'state' in this function represents the state that's within our
 *  Redux store. */
function mapStateToProps(state, ownProps) {
  const { auth } = state;
  return {
    auth,
  }  
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: user => dispatch(authActions.loginUserThunk(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);