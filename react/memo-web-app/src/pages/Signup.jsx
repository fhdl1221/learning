import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signup, resetIsSignup } from "../store/authSlice";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);

  const { isSignup, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSignup) {
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      dispatch(resetIsSignup());
      navigate("/login");
    }
  }, [isSignup, dispatch]);

  useEffect(() => {
    if (password && pwCheck && password !== pwCheck) {
      setPwError(true);
    } else {
      setPwError(false);
    }
  }, [password, pwCheck]);

  function handleSubmit(e) {
    e.preventDefault();
    if (pwError) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (password.length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다.");
      return;
    }
    dispatch(signup({ email: email, password: password }));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          회원가입
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              비밀번호 (8자 이상)
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="pwCheck"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="pwCheck"
              name="pwCheck"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                pwError ? "border-red-500" : ""
              }`}
            />
            {pwError && (
              <p className="text-red-500 text-xs italic">
                비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mb-4">{error.message}</p>
          )}
          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              disabled={pwError}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors disabled:bg-gray-400"
            >
              회원가입
            </button>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4"
            >
              이미 계정이 있으신가요? 로그인
            </Link>
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4"
            >
              처음으로
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
