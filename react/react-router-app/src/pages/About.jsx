import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>소개 페이지</h1>
      <NavLink to="/">홈 페이지로 이동</NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-red-900 font-bold text-2xl" : "";
        }}
      >
        소개
      </NavLink>
      <br />
      <NavLink to="/profile">프로필 페이지로 이동</NavLink>
    </div>
  );
}
