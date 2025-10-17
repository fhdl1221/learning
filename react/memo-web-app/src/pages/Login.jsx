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
  return (
    <div>
      <form>
        <input type="email" />
        <input type="password" />
        <button>로그인</button>
        <button>회원가입</button>
        <button>처음으로</button>
      </form>
    </div>
  );
}
