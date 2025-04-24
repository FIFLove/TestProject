import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CafePages from "./pages/CafePages";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CafePages />} />
        <Route path="/post/:id" element={<PostDetail />} />  {/* 게시글 상세 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
