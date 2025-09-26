const obj1 = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

// 객체 복사
// obj1의 내용을 가져오는 것이 아니라 객체의 주소를 가져와서 사용하는 것. 객체를 직접적으로 가지는 것이 아니라 주소를 통해 접근하는 것
// 주소 참조 자료형
const obj2 = obj1;

obj2["location"] = "대구";

console.log(obj2);
console.log(obj1); // obj2만 수정했는데 obj1까지 수정됨

// ... 스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 }; // obj1의 속성을 펼쳐서 새로운 객체를 생성
console.log(obj3);
obj3["name"] = "고길동";
console.log(obj1);
console.log(obj3); // obj3만 수정

// 편한 방법
// 객체를 생성하면서 age 속성 수정, 새로운 속성 추가도 가능
let obj4 = { ...obj1, age: 21, planet: "지구" };
console.log(obj4);

// 배열 데이터의 스프레드 연산자
let arr1 = [1, 2, 3, 4, 5];

// 메모리 주소 복사
let arr2 = arr1;
arr2[0] = 0;
console.log(arr1);
console.log(arr2);

// 스프레드 연산자를 활용한 복사
let arr3 = [...arr1];
arr3[0] = 1;
console.log(arr1);
console.log(arr3);

// 스프레드 연산자를 활용한 원소 추가
// push()를 사용해서 원소를 추가할 수도 있지만 번거로우니 스프레드 연산자를 활용한 방법 권장
let arr4 = [...arr1, 6, 7, 8];
console.log(arr4);

// 원소가 객체인 배열
// 객체를 저장한 배열
let objectArr = [{ name: "철수", age: 20 }];

// 새로운 객체를 추가한 "새로운 배열" 생성
// 리액트에서는 push()로 기존의 배열에 객체를 추가하면 안되고, 새로운 배열을 생성해야됨
let newObjectArr = [...objectArr, { name: "영희", age: 20 }];
objectArr.push({ name: "영희", age: 20 });
console.log(newObjectArr);
console.log(objectArr);
// 결과는 같지만 과정이 완전 다름

