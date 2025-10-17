import React from "react";

export default function Home() {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        MemoApp에 오신 것을 환영합니다!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        이곳에서 당신의 생각과 아이디어를 손쉽게 기록하고 관리하세요.
      </p>
      <p className="text-gray-500">
        로그인하여 메모를 작성하거나, 다른 사람들의 메모를 둘러보세요.
      </p>
    </div>
  );
}
