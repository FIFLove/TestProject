import React, { useState } from "react";
import "./BoardSection.css";

const BoardTopOption = ({
  totalPosts,
  hideNotices,
  onHideNoticesChange,
  sortType,
  onSortTypeChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const [viewType, setViewType] = useState("list"); // 기본값은 목록형

  const handleViewChange = (view) => {
    setViewType(view);
    // 정렬 버튼 기능에 맞는 상태 업데이트
    onSortTypeChange(view); // 정렬 방식 변경 시 부모로 전달
  };

  return (
    <div className="BoardTopOption">
      <span className="total">{totalPosts} 개의 글</span>

      <div className="sortArea">
        <label className="noticeCheck">
          <input
            type="checkbox"
            checked={hideNotices}
            onChange={(e) => onHideNoticesChange(e.target.checked)}
          />
          공지 숨기기
        </label>

        {/* 정렬 버튼 UI */}
        <div className="viewButtons">
          <button
            className={`viewButton ${viewType === "card" ? "active" : ""}`}
            onClick={() => handleViewChange("card")}
          >
            카드형
          </button>
          <button
            className={`viewButton ${viewType === "album" ? "active" : ""}`}
            onClick={() => handleViewChange("album")}
          >
            앨범형
          </button>
          <button
            className={`viewButton ${viewType === "list" ? "active" : ""}`}
            onClick={() => handleViewChange("list")}
          >
            목록형
          </button>
        </div>

        {/* 페이지 항목 수 선택 */}
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={5}>5개씩</option>
          <option value={10}>10개씩</option>
          <option value={15}>15개씩</option>
          <option value={20}>20개씩</option>
        </select>
      </div>
    </div>
  );
};

export default BoardTopOption;
