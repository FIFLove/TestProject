document.addEventListener("DOMContentLoaded", () => {
    const boardList = document.getElementById('board-list');
    const pageNav = document.getElementById('page-nav');
    const noticeCheck = document.querySelector('.noticeCheck input'); // 공지 숨기기 체크박스
    const postsPerPageSelect = document.querySelector('select[name="area"]'); // 게시글 개수 셀렉트 박스
    let postsPerPage = 10; // 디폴트로 10개씩 표시

    // 총 게시글 수와 페이지 수를 계산하는 함수
    const calculateTotalPages = () => Math.ceil(Object.keys(allPosts).length / postsPerPage);

    // 게시글 표시 함수
    const displayPosts = (page) => {
        boardList.innerHTML = ''; // 기존 내용 초기화
        const startIdx = (page - 1) * postsPerPage;
        const endIdx = startIdx + postsPerPage;

        // 공지사항 게시글 먼저 표시
        const noticePosts = Object.entries(notices)
            .map(([id, post]) => {
                return `
                    <tr class="notice">
                        <td class="NoticeBoardCategory">${post.category}</td>
                        <td class="NoticeBoardTitle">
                            <a href="detail.html?id=${post.id}&type=notice">${post.title}</a>
                        </td>
                        <td class="NoticeBoardHeader">${post.writer}</td>
                        <td class="NoticeBoardDate">${post.date}</td>
                        <td class="NoticeBoardCount">${post.count}</td>
                    </tr>
                `;
            }).join('');

        // 공지 숨기기 체크박스가 체크된 경우 공지사항 숨기기
        if (noticeCheck.checked) {
            // 공지사항을 제외한 일반 게시글만 표시
            const normalPosts = Object.entries(posts)
                .slice(startIdx, endIdx)
                .map(([id, post]) => {
                    return `
                        <tr>
                            <td class="boardCategory">${post.category}</td>
                            <td class="boardTitle">
                                <a href="detail.html?id=${post.id}&type=post">${post.title}</a>
                            </td>
                            <td class="boardWriter">${post.writer}</td>
                            <td class="boardDate">${post.date}</td>
                            <td class="boardCount">${post.count}</td>
                        </tr>
                    `;
                }).join('');
            
            boardList.innerHTML = normalPosts;
        } else {
            // 공지사항과 일반 게시글을 합쳐서 표시
            const normalPosts = Object.entries(posts)
                .slice(startIdx, endIdx)
                .map(([id, post]) => {
                    return `
                        <tr>
                            <td class="boardCategory">${post.category}</td>
                            <td class="boardTitle">
                                <a href="detail.html?id=${post.id}">${post.title}</a>
                            </td>
                            <td class="boardWriter">${post.writer}</td>
                            <td class="boardDate">${post.date}</td>
                            <td class="boardCount">${post.count}</td>
                        </tr>
                    `;
                }).join('');
            
            boardList.innerHTML = noticePosts + normalPosts; // 공지사항 + 일반 게시글 표시
        }

        // 페이지 번호 표시
        const totalPages = calculateTotalPages();
        pageNav.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            pageNav.innerHTML += `<span class="pageNum" onclick="changePage(${i})">${i}</span>`;
        }
    };

    // 페이지 변경 함수
    window.changePage = (page) => {
        displayPosts(page);
    };

    // 게시글 개수 변경 시 적용
    postsPerPageSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // 선택된 값에 따라 페이지당 게시글 수 설정
        switch (selectedValue) {
            case 'five':
                postsPerPage = 5;
                break;
            case 'ten':
                postsPerPage = 10;
                break;
            case 'fifteen':
                postsPerPage = 15;
                break;
            case 'twenty':
                postsPerPage = 20;
                break;
            default:
                postsPerPage = 10;
                break;
        }

        // 페이지 변경 후 다시 게시글 표시
        displayPosts(1); // 첫 번째 페이지로 초기화
    });

    // 공지 숨기기 체크박스 상태 변화 시 재렌더링
    noticeCheck.addEventListener('change', () => {
        displayPosts(1); // 첫 번째 페이지로 초기화
    });

    // 처음 페이지 로드 시 첫 번째 페이지 표시
    displayPosts(1);
});
