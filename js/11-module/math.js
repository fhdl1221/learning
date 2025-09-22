// 외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function devide(n1, n2) {
  return n1 / n2;
}

// 상수도 내보내기 가능
const PI = 3.14;

// 함수 add를 내보내기
export { add, substract, multiply, devide, PI };
