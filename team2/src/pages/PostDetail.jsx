import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams(); // URL에서 id 받아오기

  return (
    <div>
      <h2>게시글 상세 페이지</h2>
      <p>이 게시글의 ID는 {id}입니다.</p>
      {/* 게시글 ID를 바탕으로 실제 데이터 불러와서 출력 */}
    </div>
  );
};

export default PostDetail;
