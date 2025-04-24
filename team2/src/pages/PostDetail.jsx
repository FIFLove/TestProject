import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null); // 초기 상태는 null

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("로그인 후에 게시글을 볼 수 있습니다.");
      navigate("/login");
    } else {
      setIsAuthorized(true); // 렌더링 허용
    }
  }, [navigate]);

  if (isAuthorized === null) return null; // 체크 중엔 아무것도 렌더링하지 않음

  return (
    <div>
      <h2>게시글 상세 페이지</h2>
      <p>이 게시글의 ID는 {id}입니다.</p>
    </div>
  );
};

export default PostDetail;
