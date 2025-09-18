/* if ~ else if 조건문 기본 구조
if (조건식) {

} else if (조건식') {
  조건식`는 조건식이 거짓(false)이라면 평가된다
 } else if (조건식'') {
  조건식''는 조건식'가 거짓(false)이라면 평가된다 
 }
*/
if (5 > 10) {
  console.log("5는 10보다 크다");
} else if (5 > 7) {
  console.log("5는 7보다 크다");
} else if (5 > 5) {
  console.log("5는 5보다 크다");
} else if (5 > 3) {
  console.log("5는 3보다 크다");
}

// 변수 number를 선언하고, 숫자 1을 할당
let number = 1;

// number가 0보다 크면 양수, 0보다 작으면 음수라고 출력
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 변수 number2를 선언하고, 0을 할당
// number2가 0보다 크면 양수, 0보다 작으면 음수, 그것도 아니면 0출력
let number2 = 0;
if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// 변수 age를 선언하고, 25할당
// 변수 isStudent를 선언하고, true할당
let age = 25;
let isStudent = true;
// 1. 변수 age가 20이상이면
// 1-1. 변수 isStudent가 true라면
// 1-2. 변수 isStudent가 true가 아니라면

// 2. 변수 age가 20이상이 아니라면
// 2-1. 변수 isStudent가 true라면
// 2-2. 변수 isStudent가 true가 아니라면
if (age >= 20) {
  if (isStudent === true) {
    console.log("성인 학생입니다.");
  } else {
    console.log("성인입니다.");
  }
} else {
  if (isStudent === true) {
    console.log("미성년 학생입니다.");
  } else {
    console.log("미성년입니다.");
  }
}

let x = 7;
let result = x % 2 === 0 ? "짝수" : "홀수";
console.log(`${x}는 ${result}입니다`);

// 변수 score를 선언하고, 숫자 75를 할당한다
let score = 75;
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면
if (score >= 90) {
  console.log("90점 이상");
} else if (score < 90 && score >= 80) {
  console.log("80점 이상 90점 미만");
} else if (score < 80 && score >= 70) {
  console.log("70점 이상 80점 미만");
} else if (score < 70 && score >= 60) {
  console.log("60점 이상 70점 미만");
} else {
  console.log("60점 미만");
}