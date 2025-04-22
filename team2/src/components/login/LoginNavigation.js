import React from "react";
import "./LoginNavigation.css"; // CSS 파일 import
import { Link } from "react-router-dom";

const LoginNavigation = () => {
  return (
    <nav>
      <ul className="find_wrap" id="find_wrap">
        <li>
          <p>비밀번호 찾기</p>
        </li>
        <li className="separator"></li>
        <li>
          <p>아이디 찾기</p>
        </li>
        <li className="separator"></li>
        <li>
          <Link to="/signup" id="join" className="find_text">
            회원가입
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LoginNavigation;
