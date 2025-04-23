import React from "react";

const BoardList = ({ posts }) => {
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
            <tr key={post.id} className={post.category === "공지" ? "notice" : ""}>
              <td className="boardCategory">{post.category}</td>
              <td className="boardTitle">
                <a href={`detail.html?id=${post.id}`}>{post.title}</a>
              </td>
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
