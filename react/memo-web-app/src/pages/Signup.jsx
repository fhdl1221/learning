import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, resetIsSignup } from "../store/authSlice";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState("");

  const isSignup = useSelector((state) => state.auth.isSignup);

  useEffect(() => {
    if (isSignup) {
      alert("회원가입이 완료되었습니다. 메일함을 확인하세요");
      dispatch(resetIsSignup);

      navigate("/");
    }
  }, [isSignup, dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
      if (pwCheck && value !== pwCheck)
        setPwError("비밀번호가 일치하지 않습니다");
      else setPwError("");
    }
    if (name === "pwCheck") {
      setPwCheck(value);
      if (password && value !== password)
        setPwError("비밀번호가 일치하지 않습니다");
      else setPwError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다");
      return;
    }

    if (password !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    dispatch(signup({ email: email, password: password }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="이메일 주소"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="password"
          name="pwCheck"
          value={pwCheck}
          placeholder="비밀번호 확인"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {pwError && <p className="text-red-500">{pwError}</p>}
        <button type="submit">회원가입</button>
        <button>로그인</button>
        <button>처음으로</button>
      </form>
    </div>
  );
}
