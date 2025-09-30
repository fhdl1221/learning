import React from "react";

export default function AdminLink({ isAdmin }) {
  return (
    <div>
      <p>현재 권한 : {isAdmin ? "관리자" : "일반 사용자"}</p>
      {isAdmin && <a className="text-red-500">관리 페이지 이동</a>}
    </div>
  );
}
