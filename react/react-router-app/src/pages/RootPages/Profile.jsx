import { use } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 불러오기

export default function Profile() {
  const isLogin = true;

  if (isLogin === false) {
    // Navigate는 컴포넌트라서 return 내부에 있어야 한다
    return <Navigate to="/" replace></Navigate>;
  }

  const navigate = useNavigate();

  return (
    <div>
      사용자 정보
      <button
        className="border p-2 cursor-pointer"
        onClick={() => {
          alert("홈페이지로 이동합니다");
          // 페이지 이동 전 특정 로직을 수행할 때 사용
          navigate("/", { replace: true });
        }}
      >
        홈페이지로 이동
      </button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
