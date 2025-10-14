// createBrowserRouter 함수 불러오기
// createBrowserRouter 함수는 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매칭
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import ProtectedLayout from "../layout/ProtectedLayout";

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";

import AuthHome from "../pages/AuthPages/AuthHome";
import Signup from "../pages/AuthPages/Signup";
import Login from "../pages/AuthPages/Login";

import PostList from "../pages/RootPages/PostList";
import PostDetail from "../pages/RootPages/PostDetail";

import PATHS from "../constants/paths";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index : true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POSTS_DETAIL,
        Component: PostDetail,
      },
    ],
  },
  // AuthLayout 경로 설정
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
    ],
  },
  {
    // path 속성 x
    Component: ProtectedLayout,
    children: [
      {
        path: PATHS.ROOT.PROFILE,
        Component: Profile,
      },
    ],
  },
]);

// 라우터 내보내기
export default router;
