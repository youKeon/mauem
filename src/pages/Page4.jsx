import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import { value4 } from "../recoil/store";
import { useRecoilState } from "recoil";

const Page4 = () => {
  const buttonText = ["짧게","적당하게","길게"];
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useRecoilState(value4);
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <HeaderBar />
      <ProgressBar num={4} />
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
            어느 정도의 길이를 원하시나요?
          </p>

          {buttonText.map((item, idx) => {
            return (
              <button
                style={{
                  backgroundColor:
                    clickedButton === item ? "#FFE1E1" : "#f0f0f0", // 클릭된 버튼일 때 다른 배경색 적용
                  width: "90%",
                  height: "50px",
                  borderRadius: "10px",
                  marginTop: "1em",
                  outline: "none",
                  padding: "10px",
                  border: "none",
                  fontSize: "18px",
                  textAlign: "left",
                }}
                key={idx}
                onClick={() => {
                  setInputValue(item);
                  setClickedButton(item);
                }}
              >
                {item}
              </button>
            );
          })}
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
          onClick={() => {
            navigate("/page5");
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page4;
