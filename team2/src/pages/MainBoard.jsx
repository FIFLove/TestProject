import React from 'react';
import BoardSection from '../components/boardComponents/BoardSection/BoardSection';
import BoardHeader from '../components/boardComponents/BoardHeader';
import BoardFooter from '../components/boardComponents/BoardFooter';
import BoardSidebar from '../components/boardComponents/BoardSidebar';

import "../pages/MainBoard.css"; // 필요 시 스타일 분리

const MainBoard = () => {
  return (
    <>
      <BoardHeader />
      <main>

        <BoardSidebar />
        <BoardSection /> 
        {
            
        }

        {/* 다른 팀원 컴포넌트들도 여기에 추가 */}
      </main>
      <BoardFooter />
    </>
  );
};

export default MainBoard;
