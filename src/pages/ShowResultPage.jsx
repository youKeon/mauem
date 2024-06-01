import React, { useEffect } from "react";
import HeaderBar2 from "../component/HeaderBar2";
import { useRecoilValue } from "recoil";
import { result, myName } from "../recoil/store";
import { useNavigate } from "react-router-dom";

const ShowResultPage = () => {
  const name = useRecoilValue(myName);
  const gptRes = useRecoilValue(result);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("gptRes", gptRes);
  }, []);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${require("../assets/background.png")})`,
      }}
    >
      <HeaderBar2 />
      <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
        <div style={{ display: "inline", color: "#FF6900" }}>{name}</div> 님을
        위한
        <p>스크립트를 생성했어요!</p>
      </div>
      <div
        style={{
          width: "360px",
          height: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "25px 24px",
          margin: "0px 20px",
          fontSize: "18px",
          lineHeight: "1.8rem",
          overflow: "scroll",
        }}
      >
        {gptRes}
      </div>
      <button
        style={{
          backgroundColor: "#FF6900",
          width: "90%",
          height: "53px",
          borderRadius: "10px",
          color: "white",
          margin: "50px 20px 0px 20px",
          border: "none",
          fontSize: "18px",
          fontWeight: "bolder",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        다음
      </button>
    </div>
  );
};

export default ShowResultPage;
