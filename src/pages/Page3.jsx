import React, { useState } from "react";
import HeaderBar from "../component/HeaderBar";
import ProgressBar from "../component/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { value3 } from "../recoil/store";

const Page3 = () => {
  const buttonText = ["경사", "조사", "기타"];
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useRecoilState(value3);

  // 각 버튼의 클릭 상태를 관리할 상태 변수
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
              marginBottom: "15px",
              marginLeft: "10px",
            }}
          >
            스크립트의 내용은 무엇인가요?
          </p>

          {/* 각 버튼의 클릭 상태에 따라 스타일 변경 */}
          {buttonText.map((text, index) => (
            <button
              key={index}
              style={{
                backgroundColor: clickedButton === text ? "#FFE1E1" : "#f0f0f0", // 클릭된 버튼일 때 다른 배경색 적용
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
              onClick={() => {
                setInputValue(text);
                setClickedButton(text); // 클릭된 버튼 상태 변경
              }}
            >
              {text}
            </button>
          ))}
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
            // 현재 선택된 버튼이 없는 경우에는 이동하지 않음
            if (!clickedButton) {
              return;
            }
            // 현재 선택된 버튼의 인덱스를 찾아서 페이지로 이동
            const index = buttonText.indexOf(clickedButton);
            navigate(`/page3_${index + 1}`);
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Page3;
