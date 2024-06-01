import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import { messageType_add } from "../recoil/store";
import { useRecoilState } from "recoil";

const SelectBadPage = () => {
  const [inputValue, setInputValue] = useRecoilState(messageType_add);

  const navigate = useNavigate();
  const text = [
    "장례",
    "추모",
    "제사",
    "반려동물",
    "이별",
    "가족",
    "이혼",
    "실직",
    "건강악화",
    "부상",
    "자연재해",
    "유산",
  ];
  const [clickedButton, setClickedButton] = useState(null);

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
              marginBottom: "25px",
              marginLeft: "10px",
            }}
          >
            어떤 조사인가요?
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
            navigate("/select/messageLen");
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SelectBadPage;
