import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";
import { messageType_add } from "../recoil/store";
import { useRecoilState } from "recoil";

const InputEtcPage = () => {
  const buttonText = ["경사", "조사", "기타"];
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(messageType_add);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextButtonClick = () => {
    setName(inputValue);
    navigate("/select/messageLen");
    console.log(inputValue);
  };
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
            어떤 스크립트를 생성하고 싶나요?
          </p>

          <Input
            text={"ex 메일"}
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

export default InputEtcPage;
