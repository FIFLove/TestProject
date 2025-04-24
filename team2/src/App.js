import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Board from "./pages/Board";
import LoginPage from "./pages/LoginPage"; // 로그인 페이지 컴포넌트
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/board" replace />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post/:id" element={<PostDetail />} />  {/* 게시글 상세 페이지 */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
