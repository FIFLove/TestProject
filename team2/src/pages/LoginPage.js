import React from "react";
import LoginLogo from "../components/login/LoginLogo";
import LoginNavigation from "../components/login/LoginNavigation";
import LoginFooter from "../components/login/LoginFooter";
import LoginBanner from "../components/login/LoginBanner";
import LoginForm from "../login/LoginForm";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <>
      <LoginLogo />
      <LoginForm />
      <LoginNavigation />
      <LoginBanner />
      <LoginFooter />
    </>
  );
};

export default LoginPage;
