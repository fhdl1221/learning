import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          로그인
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900 text-sm mb-2">
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="login@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-900 text-sm mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mb-4">{error.message}</p>
          )}
          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition-colors"
            >
              로그인
            </button>
            <Link
              to="/signup"
              className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800 mt-6"
            >
              계정이 없으신가요? 회원가입
            </Link>
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-xs text-gray-500 hover:text-blue-800 mt-4"
            >
              처음으로
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
