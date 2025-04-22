import React from "react";
import "./LoginFooter.css";
import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer_link" id="footer_link">
          <li>
            <p>이용약관</p>
          </li>
          <li className="separator_foot"></li>
          <li>
            <p>
              <strong>개인정보처리방침</strong>
            </p>
          </li>
          <li className="separator_foot"></li>
          <li>
            <p>책임의 한계와 법적고지</p>
          </li>
          <li className="separator_foot"></li>
          <li>
            <p>회원정보 고객센터</p>
          </li>
        </ul>
      </nav>
      <div className="footer_inner">
        <Link to="/" className="logo" id="footer.logo">
          NAVER
        </Link>
        <span className="text">Copyright</span>
        <span className="corp">© NAVER Corp.</span>
        <span className="text">All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default LoginFooter;
