import React from 'react';
import PropTypes from 'prop-types';

import './label.scss';

export const Label = ({ labelFor, text, className }) => (
  <label htmlFor={labelFor} className={`label ${className}`}>
    {text}
  </label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: '',
};
