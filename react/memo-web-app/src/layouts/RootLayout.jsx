import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function RootLayout() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <header>
        <nav>
          {token ? (
            <>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/signup">회원가입 페이지</Link>
              <Link to="/login">로그인 페이지</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
