import React, { useEffect, useState } from "react";
// useEffect 훅은 데이터를 생성하는 훅은 아님
export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // 모든 데이터를 감시
  useEffect(() => {
    // 콜백 함수
    // 화면 렌더링과 관련 없는 일을 한다
    // API 요청하기, 타이머 시작하기 등등
    console.log("의존성 배열이 없는 useEffect");
  });

  // 감시하는 데이터 없고, 렌더링될때 최초 한 번 실행
  useEffect(() => {
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []);

  // 의존성 배열에 있는 데이터가 변경될 때 실행
  useEffect(() => {
    console.log("의존성 배열에 number 상태가 저장");
  }, [number]);

  useEffect(() => {
    console.log("의존성 배열에 number2 상태가 저장");
  }, [number2]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("1");
  //   }, 1000);
  //   return () => {
  //     // 정리 함수
  //     // 컴포넌트가 언마운트(죽을 때)될 때 실행

  //     // 타이머 설정을 지우는것?
  //     clearInterval(intervalId);
  //   };
  // });

  return (
    <div>
      {/* onClick 속성의 화살표함수에서 setNumber(number+1) 실행 */}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      {/* onClick 속성의 화살표함수에서 setNumber2(number2+1) 실행 */}
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
