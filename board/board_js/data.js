// data.js
const posts = {};  // 일반 게시글
const notices = {};  // 공지

// 공지 데이터 생성
for (let i = 1; i <= 3; i++) {
  notices[i] = {
    id: i,
    category: `공지${i}`,
    title: `공지제목${i}`,
    writer: `운영자${i}`,
    date: `2025.04.${String(15 + (i % 15)).padStart(2, '0')}`,
    count: i,
    content: `이것은 ${i}번째 공지글의 내용입니다.`  // 본문 내용 추가
  };
}

// 일반 게시글 데이터 생성
for (let i = 1; i <= 50; i++) {
  posts[i] = {
    id: i,
    category: `카테고리${i}`,
    title: `제목${i}`,
    writer: `작성자${i}`,
    date: `2025.04.${String(15 + (i % 15)).padStart(2, '0')}`,
    count: i,
    content: `이것은 ${i}번째 게시글입니다.`  // 본문 내용 추가
  };
}

// 합쳐서 하나의 객체로 관리
const allPosts = { ...notices, ...posts }; // 공지글을 일반 게시글 앞에 배치
