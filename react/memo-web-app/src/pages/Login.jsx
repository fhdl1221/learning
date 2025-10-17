import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      alert("로그인 성공");
      navigate("/");
    }
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    dispatch(login({ email: email, password: password }));
  }
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
          placeholder="이메일 주소"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">로그인</button>
        <button type="button" onClick={() => navigate("/signup")}>
          회원가입
        </button>
        <button type="button" onClick={() => navigate("/")}>
          처음으로
        </button>
      </form>
    </div>
  );
}
