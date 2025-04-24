import React, { useState, useEffect, useCallback, useMemo } from "react";
import SearchBar from "./SearchBar";
import BoardTopOption from "./BoardTopOption";
import BoardList from "./BoardList";
import "./BoardSection.css";

const BoardSection = () => {
  const dummyNotices = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        category: "공지",
        title: `공지사항 ${i + 1}`,
        content: `공지사항 내용 ${i + 1}`,
        writer: "관리자",
        date: `2025-04-${22 - i}`,
        count: 10 + i,
      })),
    []
  );

  const dummyPosts = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i + 5,
        category: "일반",
        title: `일반 게시글 ${i + 1}`,
        content: `일반 게시글 내용 ${i + 1}`,
        writer: i % 2 === 0 ? "홍길동" : "김철수",
        date: `2025-04-${(22 - (i % 5)).toString().padStart(2, "0")}`,
        count: 20 + i,
      })),
    []
  );

  const [searchKeyword, setSearchKeyword] = useState("");
  const [hideNotices, setHideNotices] = useState(false);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [filteredGeneralPosts, setFilteredGeneralPosts] = useState([]);
  const [sortType, setSortType] = useState("latest");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const sortPosts = useCallback((posts) => {
    const sorted = [...posts];
    sorted.sort((a, b) => {
      if (a.date === b.date) return b.id - a.id;
      return b.date.localeCompare(a.date);
    });
    return sorted;
  }, []);

  const handleSearch = useCallback(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    const matchedNotices = dummyNotices.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.content.toLowerCase().includes(keyword)
    );

    const matchedGeneral = dummyPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.content.toLowerCase().includes(keyword)
    );

    setFilteredNotices(matchedNotices);
    setFilteredGeneralPosts(sortPosts(matchedGeneral));
    setCurrentPage(1);
  }, [searchKeyword, dummyNotices, dummyPosts, sortPosts]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const totalPages = Math.ceil(filteredGeneralPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGeneral = filteredGeneralPosts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const postsToDisplay = hideNotices
    ? paginatedGeneral
    : [...filteredNotices, ...paginatedGeneral];

  return (
    <section>
      <div className="BoardHeader">
        <h2 style={{ marginTop: 0 }}>전체 글 보기</h2>
      </div>

      <BoardTopOption
        totalPosts={filteredNotices.length + filteredGeneralPosts.length}
        hideNotices={hideNotices}
        onHideNoticesChange={setHideNotices}
        sortType={sortType}
        onSortTypeChange={setSortType}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
      />

      <BoardList posts={postsToDisplay} />

      <div className="write-button">
        <button className="write-button">
          <img src="/img_board/write_btn.jpeg" alt="글쓰기" />
        </button>
      </div>

      <div className="BoardBottomOption">



      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <SearchBar
        searchKeyword={searchKeyword}
        onSearchKeywordChange={(e) => setSearchKeyword(e.target.value)}
        onSearchClick={handleSearch}
      />

        </div>

    </section>
  );
};

export default BoardSection;
