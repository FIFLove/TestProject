import React, { useState, useRef, useEffect } from "react";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import KeepLoginCheckbox from "./KeepLoginCheckbox";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

import "./css/LoginForm.css";

const LoginForm = ({ savedId, savedPassword }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const userIdRef = useRef(null); // 아이디 입력 필드에 대한 ref
  const passwordRef = useRef(null); // 비밀번호 입력 필드에 대한 ref

  const navigate = useNavigate();

  useEffect(() => {
    // 아이디와 비밀번호가 모두 입력되었을 때만 isActive를 true로 설정
    setIsActive(userId !== "" && password !== "");
  }, [userId, password]); // userId나 password가 변경될 때마다 실행

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === "") {
      setError(
        <span>
          <strong>아이디 또는 전화번호</strong>를 입력해주세요.
        </span>
      );
      userIdRef.current?.focus();
      return;
    }

    if (password === "") {
      setError(
        <span>
          <strong>비밀번호</strong>를 입력해주세요.
        </span>
      );
      passwordRef.current?.focus();
      return;
    }

    // 5. 입력값과 저장된 값 비교
    if (userId !== savedId || password !== savedPassword) {
      setError(<span>다시 로그인 해주세요</span>);
      return;
    }

    setError("");
    // 로그인 성공
    localStorage.setItem("isLoggedIn", "true");
    navigate("/board");
  };

  return (
    <main id="container">
      <section className="content">
        <form onSubmit={handleSubmit} className="login_form">
          <InputField
            label=""
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onClear={() => setUserId("")}
            inputRef={userIdRef} // ref 전달
          />
          <PasswordField
            label=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClear={() => setPassword("")}
            inputRef={passwordRef} // ref 전달
          />
          <KeepLoginCheckbox />

          {/* 에러 메시지를 로그인 상태 유지 버튼 아래에 표시 */}
          {error && <p className="error_message">{error}</p>}

          <SubmitButton isActive={isActive} />
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
