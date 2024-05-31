import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import maeumLogo from "../assets/maeumLogo.png";

const HeaderBar2 = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "44px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#FF6900",
        fontSize: "25px",
        fontWeight: "bolder",
        justifyContent: "space-between",
      }}
    >
      <IoIosArrowBack
        size={30}
        style={{ color: "#C1C1C1" }}
        onClick={() => navigate(-1)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p>MAEUM</p>
        <img src={maeumLogo} />
      </div>
    </div>
  );
};

export default HeaderBar2;
