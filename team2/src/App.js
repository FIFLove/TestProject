import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"; // 로그인 페이지 컴포넌트

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
