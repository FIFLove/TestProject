import React from "react";

import "./css/SubmitButton.css";

const SubmitButton = ({ isActive }) => {
  return (
    <button type="submit" className={`btn_login ${isActive ? "active" : ""}`}>
      로그인
    </button>
  );
};

export default SubmitButton;
