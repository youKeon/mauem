import React from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";

const Page3 = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <HeaderBar />
      <ProgressBar num={1} />

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "10px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              marginBottom: "15px",
              marginLeft: "10px",
            }}
          >
            스크립트의 내용은 무엇인가요?
          </p>
          <input
            type="text"
            style={{
              backgroundColor: "#F4F4F4",
              width: "24em",
              height: "3em",
              borderRadius: "10px",
              marginTop: "1em",
              outline: "none",
              padding: "10px",
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "#585858",
            width: "100%",
            height: "53px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page3;
