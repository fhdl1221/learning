import React from "react";
import User from "./User";

export default function Container() {
  const array = [1, 2, 3, 4, 5];

  // 객체 원소를 저장한 배열
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {/* {array.map((element) => {
        return <li>{element}</li>;
      })} */}

      {userArray.map((userElement) => {
        // User 컴포넌트의 속성 이름 user에 변수 userElement를 전달
        return <User user={userElement}></User>;
      })}
    </div>
  );
}
