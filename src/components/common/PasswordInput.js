import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "./TextInput";

class PasswordInput extends React.Component {
  state = { visibility: false }

  toggleShowPassword = event => {
    event && event.preventDefault();
    this.setState(prevState => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
    const { visibility } = this.state;

    return (
      <TextInput
        htmlId={htmlId}
        label={label}
        placeholder={placeholder}
        type={visibility && 'text' || 'password'}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        error={error}
        required
        {...props}>
        {
          showVisibilityToggle && <a href="#"
                                    onClick={this.toggleShowPassword}
                                    style={{marginLeft: 5}}
                                    className={`fa fa-eye${visibility && '-slash' || ''}`} ></a>
        }
      </TextInput>
    );
  }
}

export default PasswordInput;