// 배열 고차 메서드
// 배열 원소에 콜백 함수를 순차적으로 적용하는 메서드

// 매개변수에 곱하기 2 후 반환
function multiTwo(value) {
  return value * 2;
}

function higherOrderFunction(array, callbackFunction) {
  // 배열의 반복
  for (let element of array) {
    // 배열 내부 원소에 콜백 함수를 적용
    const result = callbackFunction(element);

    // 콜백 함수 결과 출력
    console.log(result);
  }
}

numbers = [1, 2, 3, 4, 5];

// 각 원소에 곱하기 2를 출력
higherOrderFunction(numbers, multiTwo);
console.log("-----");

// 각 원소에 더하기 1을 출력
higherOrderFunction(numbers, (value) => {
  return value + 1;
});

console.log("------");

// 각 원소를 제곱해서 출력
higherOrderFunction(numbers, (value) => {
  return value * value;
});

// 배열 고차 메서드 forEach()
// 배열을 단순 반복

// 배열 고차 메서드 표현
function 콜백함수(element) {
  console.log(element + 1);
}

const numbers2 = [10, 11, 12, 13, 14];
numbers2.forEach(콜백함수);

let numbers3 = [1, 2, 3, 4, 5];

// 인덱스 반복문의 문제
// 1.조건식 실수
// 2.인덱스를 통해서 원소에 접근
for (let index = 0; index < numbers3.length; index++) {}

// for...of 문제점
// 1.내부 로직 관리의 어려움
// 2.유연성이 떨어짐
for (let element of numbers3) {
  // 내부로직
}

// 배열 고차 메서드
// 1.문법이 간결
// 2.콜백함수로 반복작업을 유연하게 제어
function 콜백함수() {}
numbers3.forEach(콜백함수);

// 각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  // 원소에 반복적으로 수행할 로직 작성
  console.log(element + 1);
});

console.log("------------");

// 각 원소 중 짝수인 원소만 출력
numbers4.forEach((element) => {
  if (element % 2 === 0) console.log(element);
});

// 각 원소에 1을 더한 결과를 모아서 새로운 배열 생성

// 빈 배열 생성
const newArray = [];

numbers4.forEach((element) => {
  newArray.push(element + 1);
});

console.log(newArray);

// map() 사용

const newArray2 = numbers4.map((element) => {
  return element + 1;
});

console.log(newArray2);

console.log("--------");

// map()을 활용해서 원소 *2를 한 데이터를 모아 새로운 배열 생성
const newArray3 = numbers4.map((element) => {
  return element * 2;
});
// 새로운 데이터 배열을 생성 -> 표현식(배열의 고차 메서드는 표현식)
// for(), forEach()는 새로운 배열을 생성하지 못함 -> 표현식 아니고 문

console.log(newArray3);

// reduce()
// 배열의 누적을 반환
const numbers5 = [1, 2, 3, 4, 5];

const result = numbers5.reduce((accValue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement : 현재 원소

  // 반환값들이 누적된다
  return accValue + 1;
});

console.log(result);

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬

const numbers6 = [2, 6, 1, 9, 7];

// a b
// 2 6

numbers6.sort((a, b) => {
  // 정렬 기준
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다

  // 오름차순
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
});

console.log(numbers6);