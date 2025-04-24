import React from "react";
import { useNavigate } from "react-router-dom"; // 🔹 추가

const BoardList = ({ posts }) => {
  const navigate = useNavigate(); // 🔹 라우터 훅 사용

  const handleRowClick = (postId) => {
    navigate(`/post/${postId}`); // 🔹 이동 처리
  };

  return (
    <div className="board">
      <table className="boardTable">
        <thead>
          <tr>
            <th className="boardCategory"></th>
            <th className="boardTitle">제목</th>
            <th className="boardWriter">작성자</th>
            <th className="boardDate">작성일</th>
            <th className="boardCount">조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className={post.category === "공지" ? "notice" : ""}
              style={{ cursor: "pointer" }}
              onClick={() => handleRowClick(post.id)} // 🔹 클릭 시 이동
            >
              <td className="boardCategory">{post.category}</td>
              <td className="boardTitle">{post.title}</td>
              <td className="boardWriter">{post.writer}</td>
              <td className="boardDate">{post.date}</td>
              <td className="boardCount">{post.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
