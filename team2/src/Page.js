import React from 'react';
import './style.css';

function Page() {
  return (
    <div className="container">
      <header className="header">
        <div>
          <div className="logo">
            <a href="https://section.cafe.naver.com/ca-fe/home" target="_blank" rel="noopener noreferrer"><h1>NAVER Cafe</h1></a>
          </div>
          <div className="header-right">
            <nav className="top-menu">
              <ul>
                <li><a href="#" className="active">카페홈</a></li>
                <li><a href="#">이웃</a></li>
                <li><a href="#">새글</a></li>
                <li><a href="#">내소식</a></li>
                <li><a href="#">채팅</a></li>
              </ul>
            </nav>
            <div className="login-area">
              <a href="#" className="login-btn">로그인</a>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <div className="cafe-info">
            <h2>카페정보</h2>
            <div className="cafe-profile">
              <div className="profile-img-container">
                <img src={process.env.PUBLIC_URL + "/img_board/profile-img.png"} alt="카페 이미지" />
              </div>
              <div className="cafe-details">
                <div className="cafe-stats">
                  <p>멤버: 8,143명<br /><strong>관리자A<br /></strong><br />취뽀6남매의 공간<br />지금 가입하세요!</p>
                </div>
              </div>
            </div>
            <button className="join-btn">카페 가입하기</button>
          </div>
          <div className="category-menu">
            <ul>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">전체글보기<span className="count">60,590</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon hot-icon">인기글</a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon cafe-icon">카페지식활동</a>
              </li>
              <li className="menu-item separator"></li>
              <li className="menu-item">
                <a href="#" className="with-icon link-icon">dataq.or.kr(자격검정)</a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">간편게시판<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">공지사항</a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon link-icon">가입인사 & 출첵<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">등업신청</a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">* 뉴스 클리핑 *</a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">자유로운글<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">책 중고거래<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">책 서평<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">Q&A 게시판<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item">
                <a href="#" className="with-icon document-icon">세미나, 공모 등 행사<span className="new-badge">N</span></a>
              </li>
              <li className="menu-item separator"></li>
              <li className="menu-item sub-header">
                <span>스터디 룸</span>
              </li>
              <li className="menu-item sub-item">
                <a href="#" className="with-icon document-icon">스터디 모집 & 현황</a>
              </li>
              <li className="menu-item sub-item">
                <a href="#" className="with-icon document-icon">스터디룸 자료실</a>
              </li>
              <li className="menu-item sub-item">
                <a href="#" className="with-icon document-icon">BooK 스터디룸</a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="section">
          <section>
            <div className="BoardHeader">
              <h2 style={{ marginTop: 0 }}> 전체 글 보기 </h2>
            </div>
            <div className="BoardTopOption">
              <span className="total">
                00000 개의 글
              </span>
              <div className="sortArea">
                <label className="noticeCheck"><input type="checkbox" /> 공지 숨기기 </label>
                <img src={process.env.PUBLIC_URL + "/img_board/sortBtn.png"} alt="정렬 버튼" />
                <select name="area">
                  <option value="five"> 5개씩 </option>
                  <option value="ten" selected> 10개씩 </option>
                  <option value="fifteen"> 15개씩 </option>
                  <option value="twenty"> 20개씩 </option>
                </select>
              </div>
            </div>
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
                <tbody id="board-list">
                  {/* 게시글 목록이 여기서 동적으로 추가됩니다. */}
                </tbody>
              </table>
            </div>
            <img src={process.env.PUBLIC_URL + "/img_board/write_btn.jpeg"} className="writeBtn" alt="글쓰기 버튼" />
            <div className="page" id="page-nav">
              {/* 페이지 번호 */}
            </div>
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
              <input type="text" className="searchInput" placeholder="검색어를 입력하세요..." />
              <button className="searchBtn">검색</button>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="cafe-url">https://www.notion.so/Team-2-6-1d13550b7b55800f8c07f4e1b0a2fade</div>
          <div className="naver-logo">NAVER</div>
          <div className="cafe-menu">카페</div>
        </div>
      </footer>
    </div>
  );
}

export default Page; 