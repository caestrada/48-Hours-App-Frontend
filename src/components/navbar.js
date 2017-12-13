import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: '#0288D1',
    color: 'white',
    textAlign: 'center',
    borderRadius: '50%'
  }
};

export default function SimpleAppBar(props) {
  return (
    <div style={styles.root}>
      <h1 style={{fontSize: '5rem', color: 'white'}}>Uno</h1>

      <div style={styles.profile}>
        <h5>AN</h5>
      </div>
    </div>
  );
}
