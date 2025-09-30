import React from "react";
// 상태(State)를 사용하기 위한 모듈
import { useState } from "react";

// 리액트 훅(Hook)
// JS 함수와 유사한 개념이지만 함수는 아님
// 함수 :
export default function StateBasic() {
  // useState 훅 사용
  // useState 훅은 배열을 생성
  // 배열에는 2개의 원소가 존재
  // [상태를 저장할 변수, 상태를 설정(변경)할 함수]

  // 배열의 구조 분해 할당을 활용

  // const [one, two] = [상태를 저장할 변수, 상태를 설정할 함수]
  const [somethingState, setSomethingState] = useState();
  const [something, setSomething] = useState();

  // 문자열 데이터로 관리하는 상태
  // string은 상태 데이터를 저장할 변수
  // setString은 상태 데이터를 변경할 함수
  const [string, setString] = useState("문자열");
  // 초기값 : 생성될 때 저장할 첫 값

  // 배열 데이터를 관리하는 상태
  // array : 상태 데이터를 저장하는 변수
  // setArray : 상태를 변경하는 함수
  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    console.log("상태 변경");
    // 상태 데이터를 변경하는 코드

    // 상태 데이터를 저장한 변수를 직접 수정해서는 절대 안 된다
    // string = "변경"

    // 변경할 데이터를 상태 변경 함수(setString)에 전달해야 한다
    setString("상태 변경");

    // array.push(4); // 잘못된 코드 -> 상태 데이터를 저장하는 변수를 직접 수정

    // 새로운 배열 데이터를 생성해서 변수 newArray에 할당
    const newArray = [...array, 4];
    // 변수 newArray를 새로운 상태로 변경
    // 리액트는 상태 변수에 저장된 메모리 주소가 그대로라면 변경이 없는 것과 동일
    // push메서드나 객체의 속성에 직접 접근해서 값을 수정하거나 추가하면 메모리 주소가 바뀌지 않음
    // 메모리 주소가 바뀌는게 중요한 이유는 리액트가 화면을 다시 그리는 원리가 상태에 저장된 메모리 주소가 바뀌었을 때 화면을 다시 그리기 때문
    
    setArray(newArray);
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((element) => {
        return <li>{element}</li>;
      })}
    </div>
  );
}
