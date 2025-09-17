console.log("Hello World");

// 주석은 //

// 자료형 확인 키워드(예약어)
// typeof
console.log(typeof "Hello World");

// 개발 입문자라면 데이터의 자료형을 자주 확인하는 습관 필요

// 원시 자료형 5개(원래는 7개)
// 문자열(String)
// 문자들의 나열 : 0개 이상의 문자를 나타내는 자료형
// 빈 문자열도 문자열 ""
console.log(typeof ""); //string

// 문자열 표현 방법 3가지
// 큰 따옴표(""), 작은 따옴표(''), 백틱(``)

// 숫자형(Number)
// 모든 종류의 숫자(정수, 0, 실수)
console.log(10);
console.log(0);
console.log(-1);
console.log(1.1);

console.log(typeof 10);
console.log(typeof 0);
console.log(typeof -1);
console.log(typeof 1.1);

// 논리형, 불리언(Boolean)
// 맞다 / 틀리다 를 표현
// true / false 2개의 데이터만 존재
console.log(typeof true);

// undefined
// 없다, 비어있다 를 표현
// 변수에 데이터가 없다 를 표현
// 개발자가 의도하지 않은 비어있음을 표현

// null
// 없다, 비어있다 를 표현
// 변수에 데이터가 없다 를 표현
// 개발자가 의도한 비어있음을 표현

console.log(typeof undefined); // undefined
console.log(typeof null); // object -> JavaScript 초창기 버전의 버그

