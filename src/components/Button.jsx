import React from "react";
import PropTypes from 'prop-types'; // ES6

import Icon from "./Icon";

// stateless component (compose component)
function Button({ buttonText, type = "button", onClick, number }) {
  console.log("Button Component")
  return (
    <button className="button_primary" type={type} onClick={onClick}>
      <Icon />
      
      {buttonText}  {number}
    </button>
  );
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  number: PropTypes.number
}
