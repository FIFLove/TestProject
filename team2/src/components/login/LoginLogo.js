import React from "react";
import { Link } from "react-router-dom";
import "./css/LoginLogo.css";

const LoginLogo = () => {
  return (
    <header className="header" role="banner">
      <div className="header_inner">
        <Link to="/" className="logo" id="log.naver">
          NAVER
        </Link>
      </div>
    </header>
  );
};

export default LoginLogo;
