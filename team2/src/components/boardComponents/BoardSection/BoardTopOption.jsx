import React from "react";

const BoardTopOption = ({ totalPosts, hideNotices, onHideNoticesChange }) => {
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

        <img src="img_board/sortBtn.png" alt="정렬 방식 선택" />

        <select name="area" defaultValue="ten">
          <option value="five">5개씩</option>
          <option value="ten">10개씩</option>
          <option value="fifteen">15개씩</option>
          <option value="twenty">20개씩</option>
        </select>
      </div>
    </div>
  );
};

export default BoardTopOption;
