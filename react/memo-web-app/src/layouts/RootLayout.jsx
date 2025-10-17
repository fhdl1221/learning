import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function RootLayout() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Content */}
      <header className="bg-white shadow-sm">
        <nav className="w-full px-10 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              MemoApp
            </Link>
            <Link
              to="/chat"
              className="text-gray-600 hover:text-black transition-colors text-lg"
            >
              채팅
            </Link>
            <Link
              to="/memo-list"
              className="text-gray-600 hover:text-black transition-colors text-lg"
            >
              목록
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {token ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="text-gray-600 hover:text-blue-500 transition-colors text-lg"
                >
                  회원가입
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 px-4 rounded transition-colors"
                >
                  로그인
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
