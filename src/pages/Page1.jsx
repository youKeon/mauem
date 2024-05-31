import React from "react";
import ProgressBar from "../component/ProgressBar";
import HeaderBar from "../component/HeaderBar";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";

const Page1 = () => {
  const navigate = useNavigate();
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
            이름을 입력해주세요.
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
          onClick={() => navigate("/page2")}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page1;
