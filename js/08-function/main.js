const result1 = add(1, 2, 3);

const n1 = 1;
const n2 = 2;
const n3 = 3;
const result2 = add(n1, n2, n3);

console.log(`result1 = ${result1}`);
console.log(`result2 = ${result2}`);
function add(number1, number2, number3) {
  return number1 + number2 + number3;
}

const sub = function (number1, number2) {
  return number1 - number2;
};

const multi = (number1, number2) => {
  return number1 * number2;
};

// 매개변수와 반환값으로 구분한 함수 정의
// 매개변수X, 반환값X => 활용도가 극히 낮음
function sayHello() {
  console.log("Hello World");
}

const sayHelloArrow = () => {
  console.log("Hello World");
};

// 매개변수X, 반환값O => 활용도가 낮음
function createOne() {
  return 1;
}

const createOneArrow = () => {
  return 1;
};

// 매개변수O, 반환값X => 활용도가 높음
function determine(number) {
  if (number < 0) console.log("음수");
  else if (number > 0) console.log("양수");
  else console.log("0");
}

const determineArrow = (number) => {
  if (number < 0) console.log("음수");
  else if (number > 0) console.log("양수");
  else console.log("0");
};

// 매개변수O, 반환값O => 활용도가 극히 높음

// 함수 선언식
// 매개변수가 짝수면 true 반환
// 매개변수가 홀수면 false 반환

// 1.변수 선언
let number;
// 2.기능 코드 작성
if (number % 2 === 0) {
  // 짝수
} else {
  // 홀수
}
// 3.함수 선언
// 4.변수 -> 매개변수
// 5.기능 코드 -> 함수 코드블럭
// 6.반환값 작성
function evenOdd(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const evenOddArrow = (number) => {
  if (number % 2 === 0) return true;
  else return false;
};
