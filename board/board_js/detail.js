document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");     // URL에서 id 파라미터
  const type = urlParams.get("type");     // URL에서 type 파라미터 (notice 또는 post)

  let post;

  if (type === "notice") {
    post = notices[postId];
  } else {
    post = posts[postId];
  }

  if (post) {
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-writer").textContent = post.writer;
    document.getElementById("post-date").textContent = post.date;
    document.getElementById("post-content").textContent = post.content;
  } else {
    document.getElementById("post-title").textContent = "게시글을 찾을 수 없습니다.";
    document.getElementById("post-writer").textContent = "";
    document.getElementById("post-date").textContent = "";
    document.getElementById("post-content").textContent = "해당 게시글은 존재하지 않습니다.";
  }
});
