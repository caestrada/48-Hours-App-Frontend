import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

const TextInput = ({htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props}) => {
  return (
    <div style={{marginBottom: 16}} className="form-group">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input 
        className="form-control"
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && {border: 'solid 1px red'}}
        {...props}
      />
      {children}
      {error && <div className="error" style={{color: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,
  children: PropTypes.node,
};

export default TextInput;