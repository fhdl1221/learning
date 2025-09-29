import React from "react";
import Card from "./Card";

export default function CardContainer() {
  // 자식 컴포넌트에게 전달할 데이터들
  function handleClick(user) {
    alert(`${user.name} ${user.age}`);
  }

  const user = {
    name: "홍길동",
    age: 20,
  };
  return (
    <div>
      {/* 함수를 전달할 때는 함수 이름만 전달해야 한다 */}
      <Card user={user} onClickProps={handleClick}></Card>
    </div>
  );
}
