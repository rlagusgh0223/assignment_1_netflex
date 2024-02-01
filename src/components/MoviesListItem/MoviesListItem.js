import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";
import LikeButton from "../../contexts/LikeButton";

//새로운 Context 생성
// export const LikeContext = createContext();

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();

  // 좋아요 상태를 useState 훅을 사용하여 관리한다
  // const [liked, setLiked] = useState(false);
  const handleClickUpdateNickName = () => {
    console.log(useProfile);
    return alert("닉네임 변경");
  };

  return (
    <>
      <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
        <h6>{movie.title}</h6>
      </Link>
      {
        isLoggedIn && <LikeButton />
        /* 좋아요 상태를 전달하는 제공저 생성 */
        // <LikeContext.Provider value={{ liked, setLiked }}>
        //   <LikeButton />
        // </LikeContext.Provider>
        // )
        // (likedMovies ? (
        //   <button onClick={handleClickUpdateLike}>좋아요 취소</button>
        // ) : (
        //   <button onClick={handleClickUpdateLike}>좋아요</button>
        // ))}
      }
    </>
  );
}

export default MoviesListItem;
