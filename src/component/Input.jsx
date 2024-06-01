import React from "react";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      style={{
        backgroundColor: "#F4F4F4",
        width: "90%",
        height: "50px",
        borderRadius: "10px",
        marginTop: "1em",
        outline: "none",
        padding: "10px",
        border: "none",
        fontSize: "18px",
      }}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
