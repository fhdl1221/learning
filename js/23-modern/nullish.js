// 자료형 null
// 개발자가 의도한 "빈 데이터"

// 자료형 undefined
// 개발자가 의도하지 않은 "빈 데이터"

// 기본값을 적용하는 방법
let value; // undefined
let value2 = null; // null

console.log(value);
console.log(value2);

// nullish는 데이터가 undefined 또는 null이면 해당 데이터를 대체하는 기본값을 적용
let value3 = null ?? "기본값";
console.log(value3);
