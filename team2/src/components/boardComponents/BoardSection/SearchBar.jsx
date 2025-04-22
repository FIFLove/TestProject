import React from "react";

const SearchBar = ({ searchKeyword, onSearchKeywordChange, onSearchClick }) => {
  return (
    <div className="search">
      <select className="postCommentSelect">
        <option value="post">전체기간</option>
        <option value="comment">1일</option>
        <option value="both">1주</option>
        <option value="both">1개월</option>
      </select>

      <select className="postCommentSelect">
        <option value="both">글+댓글</option>
        <option value="post">글만</option>
        <option value="comment">댓글만</option>
      </select>

      <input
        type="text"
        className="searchInput"
        placeholder="검색어를 입력하세요..."
        value={searchKeyword}
        onChange={onSearchKeywordChange}
      />

      <button className="searchBtn" onClick={onSearchClick}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
