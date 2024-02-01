import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./contexts/auth.context";
import MyPage from "./pages/MyPage2";
import { ProfileProvider } from "./contexts/profile.context";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
