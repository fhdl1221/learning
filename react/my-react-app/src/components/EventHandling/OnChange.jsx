import React from "react";

export default function OnChange() {
  // change 이벤트의 핸들러 함수 정의
  // 핸들러 함수 이름 규칙 : handle이벤트명

  // 이벤트 핸들러의 event 객체 : 이벤트 정보 저장한 객체
  function handleChange(event) {
    console.log(event);
    console.log(event["target"]);
    console.log(event["target"]["value"]);
  }

  function handleNumberChange(event) {
    // 사용자 입력 값이 10보다 작으면 console.log()를 사용해서 "10보다 작은 수"라고 출력
    const value = event["target"]["value"];
    if (value < 10) {
      console.log("10보다 작은 수");
    }
  }
  return (
    <div>
      {/* 실습2 */}
      {/* onChange 이벤트 속성에서 이벤트 객체를 전달하면서 handleNumberChange 호출 */}
      <input
        type="number"
        className="w-7xl border-2 border-amber-400 p-2 m-2"
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />

      {/* onChange 이벤트 속성 적용 */}
      <input
        type="text"
        className="w-7xl border-2 border-amber-400 p-2 m-2"
        // 이벤트 객체 event는 화살표 함수의 매개변수
        onChange={(event) => {
          // handleChange 함수 호출
          // event 인자는 그럼 어디서?
          handleChange(event);
        }}
      />
    </div>
  );
}
