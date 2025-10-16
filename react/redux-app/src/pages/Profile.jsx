import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

import { logout } from "../store/authSlice";

export default function Profile() {
  // 전역 상태 token
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodeToken, setDecodeToken] = useState(null);
  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setDecodeToken(decode);
    } else {
      //navigate("/login");
    }
  }, [token]);

  function handleLogout() {
    dispatch(logout());
    // 로그아웃 성공했다면 token이 null이 돼서 자동으로 로그인 페이지로 이동
  }

  return (
    <div>
      <div>{decodeToken ? token : "로그인을 해주세요"}</div>
      <div>
        {decodeToken ? `이메일: ${decodeToken.email}` : "로그인을 해주세요"}
      </div>
      <div>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
