import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AuthLayout() {
  // NavLink 기본 class
  const baseClass = `text-blue-900 font-bold p-2`;
  // NavLink 활성화 class
  const activeClass = `border-2 border-red-900`;
  return (
    <div>
      <div className="flex gap-2">
        {/* JSX 보간법 + 템플릿 리터럴 + 화살표 함수 + 삼항 연산자 혼합 */}
        {/* 삼항 연산자는 표현식이라서 템플릿 리터럴이 적용 가능하다 */}
        <NavLink to="/auth" className={`${baseClass}`}>
          인증 홈페이지
        </NavLink>
        <NavLink
          to="/auth/login"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          로그인 페이지
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          회원가입 페이지
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
