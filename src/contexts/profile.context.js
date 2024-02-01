const { createContext, useState, useContext } = require("react");

const initialValue = {
  nickname: "",
  updateNickName: () => {},
  likedMovies: false,
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickName, setNickName] = useState(false);
  const updateNickName = (newNickName) => setNickName(newNickName);
  const likedMovies = false;
  const value = {
    nickName,
    updateNickName,
    likedMovies,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
export default ProfileContext;
