import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import { value6 } from "../recoil/store";
import { useRecoilState } from "recoil";

const Page6 = () => {
  const navigate = useNavigate();
  const text = [
    "다정한",
    "공손한",
    "친근한",
    "편안한",
    "감정적",
    "격양된",
    "명령적",
    "강압적",
    "격식적",
  ];
  const [inputValue, setInputValue] = useRecoilState(value6);
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <HeaderBar />
      <ProgressBar num={6} />
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
              marginBottom: "25px",
              marginLeft: "10px",
            }}
          >
            어떤 말투로 스크립트를 생성하고 싶으신가요?
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            {text.slice(0, 9).map((item, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    clickedButton === item ? "#FFE1E1" : "#f0f0f0", // 클릭된 버튼일 때 다른 배경색 적용
                  border: "none",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                  fontSize: "16px",
                  height: "50px",
                }}
                onClick={() => {
                  setInputValue(item);
                  setClickedButton(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
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
            navigate("/page7");
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page6;
