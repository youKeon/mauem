import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import Input from "../component/Input";
import { useRecoilState } from "recoil";
import { receiver } from "../recoil/store";

const InputReceiverPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(receiver);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextButtonClick = () => {
    setName(inputValue);
    navigate("/select/message");
    console.log(inputValue);
  };
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
            마음을 받을 사람의 이름은?
          </p>

          <Input value={inputValue} onChange={handleInputChange} />
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

export default InputReceiverPage;
