// 형 변환
// 명시적 형 변환 : 개발자가 한 것
// 암시적 형 변환 : JS 엔진(번역기)이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123));
console.log(String(123) === "123");
console.log(String(false));
const num = 3;
console.log(num);

// true, undefined, null을 문자열로 형변환 코드 작성
console.log(String(true));
console.log(String(undefined));
console.log(String(null));

// 숫자형 명시적 형 변환
console.log(Number("123") === 123);

// 숫자 형태가 아닌 문자열을 변환한다면?
console.log(Number("1a2b")); // NaN (Not a Number)

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 틀리다(false)로 변환
// false가 아닌 데이터는 모두 맞다(true)로 변환
// 숫자형 0, -0(javascript에만 있는 숫자)이 false
console.log(Boolean(-0));
console.log(Boolean(0));
console.log(Boolean(1.1));
console.log(Boolean(9999999999));

// 문자열 형 변환
// 빈 문자열이 false
// 공백도 문자열
console.log(Boolean(""));
console.log(Boolean("    "));
console.log(Boolean("Hello"));

// 정확한 논리연산자 작동 방식
// AND(&&) : 2개의 데이터가 모두 true인 데이터라면 오른쪽 데이터를 생성
console.log(1 && 2); //true

// OR(||) : 왼쪽 데이터가 true면, 왼쪽 데이터 생성 / 왼쪽 데이터가 false면, 오른쪽 데이터를 생성
console.log(1 || 0); //1
console.log(0 || 10); //10
console.log("" || 0); //0
