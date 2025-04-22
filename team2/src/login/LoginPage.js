import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import "./LoginPage.css"
const LoginPage = () => {
  return (
    <>
      <Logo />
      <LoginForm />
      <Navigation />
      <Footer />
    </>
  );
};

export default LoginPage;
