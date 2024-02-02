import React from "react";
import "./button.css";

const Button = (props) => {
  let size = "medium";
  if (props.size == "s") {
    size = "small";
  } else if (props.size == "l") {
    size = "large";
  } 
  return (
    <button
      style={{
        background: props.bg || 'black',
        color: props.color || 'white',
        fontWeight: props.bold || 400,
        fontSize:size,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
