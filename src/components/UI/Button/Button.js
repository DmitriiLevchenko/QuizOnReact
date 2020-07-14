import React from "react";
import "./Button.css";
const Button = (props) => {
    const cls =[
        'Button',props.type,
    ]
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
