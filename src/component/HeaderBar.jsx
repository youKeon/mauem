import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", height: "44px" }}>
      <IoIosArrowBack
        size={30}
        style={{ color: "#C1C1C1" }}
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default HeaderBar;
