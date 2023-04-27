// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Render = (props) => {
  const { total, next } = props;
  return <div className="calculator-output">{next || total || 0}</div>;
};
Render.propTypes = {
  next: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
Render.defaultProps = {
  next: null,
  total: null,
};

export default Render;