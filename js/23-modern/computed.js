let key = "name";

const user = {
  // key는 문자열, 변수가 아니다
  key: "홍길동", // 의도 - name: "홍길동"
};
console.log(user); // 실제 데이터 - { key: "홍길동" }

// 계산된 속성명(key)
// 변수를 속성의 key로 사용하고 싶을 때 사용하는 문법
const user2 = {
  [key]: "홍길동",
};
console.log(user2); // { name: '홍길동' }
