import React from "react";

// props는 객체
// 부모 컴포넌트에서 `<Child name="홍길동" age={20} />` 라고 입력하면
// 리액트에서 `Child({name:"홍길동", age=20});` 이런식으로 객체로 만들어 전달함
// 객체이므로 구조분해할당 가능
export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>{props["name"]}</h1>
      <h2>{props["age"]}</h2>
    </div>
  );
}
