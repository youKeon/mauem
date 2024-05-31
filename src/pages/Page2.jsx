import React from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";

const Page2 = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <HeaderBar />
      <ProgressBar num={2} />

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
            스크립트를 받을 사람의 이름은?
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
          onClick={() => navigate("/page3")}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page2;
