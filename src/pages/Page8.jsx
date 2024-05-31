import React from "react";
import HeaderBar2 from "../component/HeaderBar2";
import { useRecoilValue } from "recoil";
import { value1 } from "../recoil/store";

const Page8 = () => {
  const name = useRecoilValue(value1);
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
      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "inline", color: "#FF6900" }}>{name}</div> 님을
          위한
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
          스크립트를 생성했어요!
        </p>
        <div
          style={{
            width: "360px",
            height: "277px",
            background: "white",
            borderRadius: "20px",
            padding: "25px 24px",
            marginLeft: "20px",
          }}
        >
          스크립트 내용 넣기
        </div>
      </div>
    </div>
  );
};

export default Page8;
