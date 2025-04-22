import React from "react";
import LoginLogo from "../components/login/LoginLogo";
import LoginNavigation from "../components/login/LoginNavigation";
import LoginFooter from "../components/login/LoginFooter";
import LoginBanner from "../components/login/LoginBanner";

const LoginPage = () => {
  return (
    <>
      <LoginLogo />
      <div>로그인 폼</div>
      <LoginNavigation />
      <LoginBanner />
      <LoginFooter />
    </>
  );
};

export default LoginPage;
