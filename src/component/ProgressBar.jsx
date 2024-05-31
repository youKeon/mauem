import React from "react";

const ProgressBar = ({ num }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
      }}
    >
      <div
        style={{
          width: "290px",
          height: "8px",
          backgroundColor: "#F4F4F4",
          borderRadius: "999px",
          marginRight: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${(num / 6) * 100}%`,
            height: "100%",
            backgroundColor: "#FF6900",
            borderRadius: "999px",
          }}
        ></div>
      </div>
      <div style={{ color: "#FF6900" }}>{num}/6</div>
    </div>
  );
};

export default ProgressBar;
