import React from 'react';
import PropTypes from "prop-types";
const Button = ({subscribe}) => {

  return (
    <button>{subscribe}</button>
  )
}

Button.defaultProps = {
    background: 'tomato',
    subscribe: 'SubScribe'
}

Button.propTypes = {
    subscribe: PropTypes.string.isRequired
}


export default Button;