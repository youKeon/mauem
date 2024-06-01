import React, { useEffect } from "react";
import HeaderBar2 from "../component/HeaderBar2.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  result,
  myName,
  receiver,
  messageType,
  messageType_add,
  messageLength,
  intimacy,
  speech,
} from "../recoil/store.js";
import { callGpt } from "../Gpt.js"; // Import the callGpt function
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [gptRes, setGptRes] = useRecoilState(result);
  const name = useRecoilValue(myName);
  const receiverName = useRecoilValue(receiver);
  const typeOfMessage = useRecoilValue(messageType);
  const typeOfMessage_add = useRecoilValue(messageType_add);
  const messageLen = useRecoilValue(messageLength);
  const frinedly = useRecoilValue(intimacy);
  const talk = useRecoilValue(speech);

  useEffect(() => {
    // Call the GPT function when the component mounts
    async function fetchGpt() {
      const response = await callGpt(
        name,
        receiverName,
        typeOfMessage,
        typeOfMessage_add,
        messageLen,
        frinedly,
        talk
      );
      console.log(response);
      setGptRes(response.message.content);
      navigate("/show/result");
    }
    fetchGpt();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${require("../assets/background.png")})`,
        height: "100%",
      }}
    >
      <HeaderBar2 />
      <div>
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
          스크립트를 생성하고 있어요
          <br />
          잠시만 기다려주세요!
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
