import React from "react";
import { useState } from "react";

export default function Form() {
  // const [username, setUserame] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");

  // 입력 요소를 객체로 관리할 상태
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // event 객체 : 발생한 이벤트의 정보를 속성으로 저장한 객체
  function handleChange(event) {
    // event 객체의 target 속성은 이벤트가 발생한 요소 정보
    const target = event["target"];
    // console.log(target);

    // target에서 name속성과 value속성을 꺼내서 출력
    // name : 요소의 name 속성, value : 요소에 사용자가 입력한 값(value)
    const { name, value } = target; // 구조분해할당
    // console.log(name, value);

    // if (name === "username") {
    //   setUserame(value);
    // } else if (name === "age") {
    //   setAge(value);
    // } else if (name === "email") {
    //   setEmail(value);
    // }

    // form 객체 상태의 모양
    // {name: "", age: 0, email: ""}
    // 새로운 form 객체 생성
    // 계산된 속성명을 사용해서 속성명(key)를 변수 name으로 대체
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  }

  return (
    <div>
      <form>
        {/* 3개의 input 요소의 값을 상태로 관리 */}
        {/* input 요소의 value 속성은 사용자가 입력한 값 */}
        {/* value={변수} 에서 value는 속성을 의미하고 오른쪽 변수는 상태 변수를 의미 */}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          // 화살표함수의 매개변수 event를 handleChange에 전달
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
