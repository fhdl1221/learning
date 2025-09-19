// 빈 배열 데이터를 변수 emptyArray 할당
let emptyArray = [];

// 1을 저장한 배열 데이터를 변수 oneArray 할당
let oneArray = [1];

// 원소를 여러개 저장하기 위해서는 쉼표(,) 원소를 구분해서 작성

// 1, 2, 3, 4를 저장한 배열 데이터를 변수 manyArray 할당
let manyArray = [1, 2, 3, 4];

let array2 = [1, 2, 3, 4];
array2[0] = -1;
console.log(array2[0]);

// 원소의 추가와 제거
// 배열데이터 .push(데이터)
// .push(데이터)

// 변수 array3을 선언하고, 배열 데이터[0]dmf gkfekd
let array3 = [0];

// 배열 array3에 1을 원소로 추가
array3.push(1);
console.log(array3);

// 배열데이터 .pop()
// 배열의 마지막 원소를 제거
// 제거한 원소를 반환

// 배열 array3의 마지막 원소를 제거
let pop = array3.pop();
console.log(pop);
console.log(array3);

// 0 부터 배열 길이 -1 까지 숫자를 출력하세요
// 배열의 길이: 배열데이터.length

// 변수 array4를 선언하고, 배열 [1,2,3]을 할당
let array4 = [1, 2, 3];
// 배열 array4의 길이 출력
console.log(array4.length);

// for 반복문을 활용해서 0부터 배열길이 -1까지 반복
for (let index = 0; index <= array4.length - 1; index++) {
  // 코드블럭
  // 위치 번호와 함꼐 위치 번호에 해당하는 원소를 출력
  console.log(`${index} : ${array4[index]}`);
}

// for...of 반복문
// 인덱스(위치번호) 활용 X
// 배열에서 직접적으로 원소를 꺼내옴
// for(원소 of 배열)
for (let element of array4) {
  console.log(element);
}
