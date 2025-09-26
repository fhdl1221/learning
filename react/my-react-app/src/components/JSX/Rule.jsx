import React from "react";

// export default : 모듈 내보내기(기본 내보내기)
// function : 함수
// 함수로 구조화되어있음
// return : 요소(Element)를 반환

// 파일 당 하나 존재하는 함수는 컴포넌트를 뜻하는데
// 컴포넌트 함수는 무조건 요소(Element)를 반환해야함
export default function Rule() {
  // 규칙1. 1개의 태그만 반환해야 한다
  // div 태그 3개를 감싸는 1개의 Fragment 태그 <> </>반환
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      {/* 규칙2. 모든 태그는 반드시 닫아야 한다 */}
      {/* input 태그를 self-closing */}
      <input />

      {/* 규칙3. 속성명(class, onclick, onsubmit)을 카멜 케이스로 작성해야 한다. - 가 연산자 빼기로 인식됨 */}
      {/* 카멜케이스 : 첫단어는 소문자, 이후 단어의 시작 글자를 대문자로 작성 */}
      {/* onclick -> onClick, onsubmit -> onSubmit */}
      {/* class -> className 으로 작성. 자바스크립트에 class라는 클래스가 이미 존재해서 중복을 피하기 위해 */}

      <p className="font-bold text-5xl text-red-700">p 태그{1 + 0}</p>

      {/* 규칙4. style 속성의 값은 객체로 작성한다 */}
      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그 2+0</p>
    </>
  );
}
