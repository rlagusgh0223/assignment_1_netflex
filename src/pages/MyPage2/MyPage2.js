import React, { useContext, useState } from "react";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../contexts/profile.context";

function MyPage() {
  const { nickName, updateNickName } = useProfile();
  const [newNickName, setNewNickname] = useState("");
  const handleClickUpdateNickName = () => {
    updateNickName(newNickName);
    console.log(useProfile);
    return alert("닉네임 변경");
  };
  return (
    <>
      <input
        type="text"
        value={newNickName}
        onChange={(e) => setNewNickname(e.target.value)}
        className={styles.input}
        placeholder="닉네임 변경"
      />
      <button className={styles.button} onClick={handleClickUpdateNickName}>
        닉네임 변경
      </button>
    </>
  );
}

export default MyPage;
