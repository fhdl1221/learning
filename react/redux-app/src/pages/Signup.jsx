import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// signup 액션 : 회원가입 비동기 네트워크 처리 액션
// resetIsSignup 액션 : isSignup 상태를 초기화(false) 액션
import { signup, resetIsSignup } from "../store/authSlice";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSignup = useSelector((state) => state.auth.isSignup);

  function handleSubmit(e) {
    e.preventDefault();
    // 비동기 처리 액션을 디스패치
    dispatch(signup({ email: email, password: password })); // 객체가 signup의 data로 전달
  }

  // 회원가입이 성공을 했을 때 알림창을 띄우고 홈페이지로 이동 시키는 코드, useEffect 사용해서
  useEffect(() => {
    if (isSignup === true) {
      alert("회원가입 성공! 메일함 확인");
      dispatch(resetIsSignup);
 
      navigate("/");
    }
  }, [isSignup, dispatch]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}
