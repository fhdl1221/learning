// 인증 관련 페이지 관리 레이아웃
// 로그인 사용자의 접근을 막는다

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to="/profile" replace></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
