import React from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import Input from "../component/Input";

const Page3 = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <HeaderBar />
      <ProgressBar num={3} />
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
        <div style={{ display: "flex", flexDirection: "column" }}>
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

          <Input />
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
