// createBrowserRouter 함수 불러오기
// createBrowserRouter 함수는 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매칭
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: "/", // 주소(URL)
    Component: Home, // 주소에 해당되는 컴포넌트
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);

// 라우터 내보내기
export default router;
