import React, { useState, useEffect, useCallback, useMemo } from "react";
import SearchBar from "./SearchBar";
import BoardTopOption from "./BoardTopOption";
import BoardList from "./BoardList";
import "./BoardSection.css";

const BoardSection = () => {
  // ✅ useMemo로 고정
  const dummyNotices = useMemo(() => [
    {
      id: 1,
      category: "공지",
      title: "공지사항 1",
      content: "공지사항 내용 1",
      writer: "관리자",
      date: "2025-04-22",
      count: 10,
    },
    {
      id: 2,
      category: "공지",
      title: "공지사항 2",
      content: "공지사항 내용 2",
      writer: "관리자",
      date: "2025-04-21",
      count: 5,
    },
  ], []);

  const dummyPosts = useMemo(() => [
    {
      id: 1,
      category: "일반",
      title: "일반 게시글 1",
      content: "일반 게시글 내용 1",
      writer: "홍길동",
      date: "2025-04-22",
      count: 20,
    },
    {
      id: 2,
      category: "일반",
      title: "일반 게시글 2",
      content: "일반 게시글 내용 2",
      writer: "김철수",
      date: "2025-04-21",
      count: 15,
    },
  ], []);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [hideNotices, setHideNotices] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([...dummyNotices, ...dummyPosts]);

  const handleSearch = useCallback(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    const filteredNotices = dummyNotices.filter(post =>
      post.title.toLowerCase().includes(keyword) || post.content.toLowerCase().includes(keyword)
    );

    const filteredGeneral = dummyPosts.filter(post =>
      post.title.toLowerCase().includes(keyword) || post.content.toLowerCase().includes(keyword)
    );

    const combined = hideNotices ? filteredGeneral : [...filteredNotices, ...filteredGeneral];
    setFilteredPosts(combined);
  }, [searchKeyword, hideNotices, dummyNotices, dummyPosts]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <section>
      <div className="BoardHeader">
        <h2 style={{ marginTop: 0 }}>전체 글 보기</h2>
      </div>

      <BoardTopOption
        totalPosts={filteredPosts.length}
        hideNotices={hideNotices}
        onHideNoticesChange={setHideNotices}
      />

      <BoardList posts={filteredPosts} />

      <SearchBar
        searchKeyword={searchKeyword}
        onSearchKeywordChange={(e) => setSearchKeyword(e.target.value)}
        onSearchClick={handleSearch}
      />
    </section>
  );
};

export default BoardSection;
