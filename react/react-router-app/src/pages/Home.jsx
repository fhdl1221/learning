import { Link, useNavigate } from "react-router-dom"; // a태그를 대체하는 Link 컴포넌트

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>홈 페이지</h1>
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <Link to="/profile">프로필 페이지로 이동</Link>
      <br />
      <button onClick={() => navigate(1)} className="cursor-pointer">
        앞으로 가기
      </button>
    </div>
  );
}
