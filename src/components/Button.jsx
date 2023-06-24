/* eslint-disable react/prop-types */
import React from "react";
import Icon from "./Icon";

// stateless component (compose component)
function Button({ buttonText, type = "button" }) {
  return (
    <button className="button_primary" type={type}>
      <Icon />
      {buttonText}
    </button>
  );
}

export default Button;
