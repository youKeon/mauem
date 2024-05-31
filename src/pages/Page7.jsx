import React, { useEffect } from "react";
import HeaderBar2 from "../component/HeaderBar2";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  result,
  value1,
  value2,
  value3,
  value3_add,
  value4,
  value5,
  value6,
} from "../recoil/store";
import { callGpt } from "../Gpt.js"; // Import the callGpt function
import { useNavigate } from "react-router-dom";

const Page7 = () => {
  const navigate=useNavigate();
  const [gptRes,setGptRes]=useRecoilState(result);
  const Vvalue1 = useRecoilValue(value1);
  const Vvalue2 = useRecoilValue(value2);
  const Vvalue3 = useRecoilValue(value3);
  const Vvalue3_add = useRecoilValue(value3_add);
  const Vvalue4 = useRecoilValue(value4);
  const Vvalue5 = useRecoilValue(value5);
  const Vvalue6 = useRecoilValue(value6);

  useEffect(() => {
    console.log(Vvalue1);
    console.log(Vvalue2);
    console.log(Vvalue3);
    console.log(Vvalue3_add);
    console.log(Vvalue4);
    console.log(Vvalue5);
    console.log(Vvalue6);

    // Call the GPT function when the component mounts
    async function fetchGpt() {
      const response = await callGpt(
        Vvalue1,
        Vvalue2,
        Vvalue3,
        Vvalue3_add,
        Vvalue4,
        Vvalue5,
        Vvalue6
      );
      console.log(response);
      navigate('/page8',{state:{response}});

      setGptRes(response.message.content);
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
       <br/>
          잠시만 기다려주세요!
        </div>
      </div>
    </div>
  );
};

export default Page7;
