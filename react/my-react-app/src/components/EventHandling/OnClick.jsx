import React from "react";

// 파일명과 동일한 함수는 컴포넌트 함수
// 컴포넌트 함수 : 요소(HTML 문서)를 반환하는 함수
export default function OnClick() {
  function handleClick() {
    alert("클릭");
  }

  return (
    <div>
      {/* 아래 버튼을 클릭했을 떄 handleClick 함수가 실행되도록 코드 작성 */}
      <button
        className="bg-blue-200 p-2 m-2 shadow"
        onClick={() => {
          handleClick();
        }}
      >
        클릭
      </button>
    </div>
  );
}
