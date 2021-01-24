import './Spinner.css';
import React from 'react';

const Spinner = (props) => {
  return (
    <div className="spinner">
      <span>
        <i className="fas fa-circle-notch fa-7x"></i>
      </span>
      <p>{props.message}</p>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
