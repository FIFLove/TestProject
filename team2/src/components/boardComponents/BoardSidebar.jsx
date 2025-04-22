import React from 'react';

const BoardSidebar = () => {
  return (
    <aside className="board-sidebar">
      <nav>
        <ul>
          <li><a href="#notice">공지사항</a></li>
          <li><a href="#free">자유게시판</a></li>
          <li><a href="#faq">자주 묻는 질문</a></li>
          <li><a href="#suggest">건의사항</a></li>
          {/* 필요한 메뉴 더 추가 가능 */}
        </ul>
      </nav>
    </aside>
  );
};

export default BoardSidebar;
