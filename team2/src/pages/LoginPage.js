import React, { useEffect } from "react";
import LoginLogo from "../components/login/LoginLogo";
import LoginNavigation from "../components/login/LoginNavigation";
import LoginFooter from "../components/login/LoginFooter";
import LoginBanner from "../components/login/LoginBanner";
import LoginForm from "../components/login/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  //값 임시 저장장
  // localStorage.setItem("saveId", "a");
  // localStorage.setItem("savePassword", "a");

  useEffect(() => {
    // 로그인 여부 확인
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // 로그인 되어 있으면 메인 페이지로 리디렉션
    if (isLoggedIn) {
      navigate("/board");
    }
  }, [navigate]);

  // 3. 회원가입 시 저장된 ID/PWD
  const saveId = localStorage.getItem("saveId") || "";
  const savePassword = localStorage.getItem("savePassword") || "";

  return (
    <>
      <LoginLogo />
      <LoginForm savedId={saveId} savedPassword={savePassword} />
      <LoginNavigation />
      <LoginBanner />
      <LoginFooter />
    </>
  );
};

export default LoginPage;
