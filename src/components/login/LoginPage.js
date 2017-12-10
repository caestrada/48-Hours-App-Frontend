import React, { Component } from 'react';
import UltiLogo from '../common/UltiLogo';

class componentName extends Component {
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

  render() {
    return (
      <form onSubmit={this.submit}>
        <UltiLogo />
        <label>
          Username: 
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={this.state.password} 
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default componentName;