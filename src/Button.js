import React from "react";

var Button = (props) => (
  <button onClick={props.action} className={props.class}>
    {props.label}
  </button>
);

export default Button;
