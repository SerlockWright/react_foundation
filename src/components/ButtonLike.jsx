/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'

const ButtonLike = React.forwardRef(({ text, ...props }, ref) => {
  // text, id, nunmber
  //  ...props: type, onClick, className, style, disabled, ...
  return (
    <button ref={ref} {...props}>{text}</button>
  );
});

export default ButtonLike