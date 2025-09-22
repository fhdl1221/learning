// 함수 선언식
function 함수명() {}

// 일급 객체
// 1.변수에 할당

// 함수 표현식
// 함수명이 없고, 대신에 변수에 할당
const functionExpression = function () {};

// 화살표 함수
// 함수명이 없고, 대신에 변수에 할당
const functionArrow = () => {};

// 일급 객체
// 2.함수의 반환값으로 사용 가능하다
function calculator(operator) {
  if (operator === "더하기")
    return (n1, n2) => {
      return n1 + n2;
    };
  if (operator === "빼기")
    return (n1, n2) => {
      return n1 - n2;
    };
}

// 일급 객체
// 3. 함수의 인자로 전달

// calculator2
// 특정 연산을 수행하고, 결과를 출력하는 함수
function calculator2(operatorFunction, n1, n2) {
  // 연산 함수를 수행
  const result = operatorFunction(n1, n2);
  // 연산 함수의 결과 출력
  console.log(`연산 결과 : ${result}`);
}

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const multi = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};
