import React from "react";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      style={{
        backgroundColor: "#F4F4F4",
        width: "90%",
        height: "3em",
        borderRadius: "10px",
        marginTop: "1em",
        outline: "none",
        padding: "10px",
        border: "none",
      }}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
