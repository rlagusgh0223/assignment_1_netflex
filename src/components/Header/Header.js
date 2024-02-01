import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickName, updateNickName } = useProfile();
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
              <li>
                <Link to="/mypage">마이페이지</Link>
              </li>
              <li>{nickName}</li>
            </>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
