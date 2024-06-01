import React, { useState } from "react";
import ProgressBar from "../component/ProgressBar";
import HeaderBar from "../component/HeaderBar";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";
import { useRecoilState } from "recoil";
import { myName } from "../recoil/store";

const Main = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(myName);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextButtonClick = () => {
    setName(inputValue);
    navigate("/inputreceiver");
    console.log(inputValue);
  };

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
            당신의 이름을 알려주세요.
          </p>
          <Input
            placeholder="이름을 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button
          style={{
            backgroundColor: "#585858",
            width: "100%",
            height: "53px",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
          onClick={handleNextButtonClick}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Main;
