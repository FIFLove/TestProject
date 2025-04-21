document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector('.searchBtn');
    const searchInput = document.querySelector('.searchInput');
    const boardList = document.getElementById('board-list');
    const pageNav = document.getElementById('page-nav');
    const noticeCheck = document.querySelector('.noticeCheck input');

    // 검색 이벤트
    searchBtn.addEventListener('click', () => {
        const keyword = searchInput.value.trim().toLowerCase();

        // 공지 필터링 여부 확인
        const showNotices = !noticeCheck.checked;

        // 공지 + 일반 게시글 통합 후 필터링
        const filtered = Object.values(allPosts).filter(post => {
            const matchTitle = post.title.toLowerCase().includes(keyword);
            const matchContent = post.content.toLowerCase().includes(keyword);
            return matchTitle || matchContent;
        });

        // 테이블 초기화
        boardList.innerHTML = '';

        // 공지 먼저 표시 (옵션에 따라)
        if (showNotices) {
            const filteredNotices = Object.values(notices).filter(post => {
                const matchTitle = post.title.toLowerCase().includes(keyword);
                const matchContent = post.content.toLowerCase().includes(keyword);
                return matchTitle || matchContent;
            });

            boardList.innerHTML += filteredNotices.map(post => `
                <tr class="notice">
                    <td class="NoticeBoardCategory">${post.category}</td>
                    <td class="NoticeBoardTitle">
                        <a href="detail.html?id=${post.id}">${post.title}</a>
                    </td>
                    <td class="NoticeBoardHeader">${post.writer}</td>
                    <td class="NoticeBoardDate">${post.date}</td>
                    <td class="NoticeBoardCount">${post.count}</td>
                </tr>
            `).join('');
        }

        // 일반 게시글 표시
        const filteredNormals = filtered.filter(post => !post.category.startsWith("공지"));

        boardList.innerHTML += filteredNormals.map(post => `
            <tr>
                <td class="boardCategory">${post.category}</td>
                <td class="boardTitle">
                    <a href="detail.html?id=${post.id}">${post.title}</a>
                </td>
                <td class="boardWriter">${post.writer}</td>
                <td class="boardDate">${post.date}</td>
                <td class="boardCount">${post.count}</td>
            </tr>
        `).join('');

        // 페이지 네비게이션 숨김 (검색 결과는 페이지 나누지 않음)
        pageNav.innerHTML = '';
        
    });
});
