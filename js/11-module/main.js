// 모듈 불러오기
// import / from
// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
// import { add, substract, multiply, devide, PI } from "./math.js";

// 여러개 내보내기/불러오기는 일부만 불러오기가 가능
// 일부 불러오기
// 트리 세이킹
// 사용하지 않는 코드를 제거함으로써 최적화
// 프로덕션 환경을 위한 파일을 생성(빌드)할 때 사용하지 않은 코드는 제거하는 기술
import { add } from "./math.js";

// console.log(add(1, 2));
// console.log(substract(3, 1));
// console.log(multiply(2, 3));
// console.log(devide(7, 2));
// console.log(PI);

// 하나만 불러오기
// 내가 불러온 함수의 이름을 결정

// 대표성을 띈다는 특징
import calculator from "./calculator.js";

console.log(calculator);
console.log(calculator.add(1, 2));
console.log(calculator.substract(3, 1));
console.log(calculator.multiply(2, 3));
