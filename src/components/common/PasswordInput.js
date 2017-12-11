import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "./TextInput";

class PasswordInput extends React.Component {
  state = { 
    showPassword: false,
  }

  toggleShowPassword = event => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
    
    if(event) event.preventDefault();
  }

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
    const { showPassword } = this.state;

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...props}>
        {
          showVisibilityToggle && <a
                                    href="#"
                                    onClick={this.toggleShowPassword}
                                    style={{marginLeft: 5}}>show
                                  </a>
        }
      </TextInput>
    );
  }
}

export default PasswordInput;