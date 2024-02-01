import React, { createContext, useContext, useState } from "react";

function LikeButton() {
  // 좋아요 상태를 관리하는 useState 훅 사용
  const [liked, setLiked] = useState(false);

  // 버튼 클릭 핸들러 함수
  const handleLikeClick = () => {
    // 좋아요 상태 토글
    setLiked(!liked);
  };
  return (
    <button onClick={handleLikeClick}>
      {liked ? "좋아요 취소" : "좋아요"}
    </button>
  );
}

export default LikeButton;
