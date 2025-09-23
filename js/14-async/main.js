// 비동기 처리 함수
// setTimeout, setInterval, fetch

// setTimeout(콜백, ms)
// ms(밀리초)뒤에 콜백함수를 실행하는 비동기처리 함수
// 빌려온 노예에게 초를 세게 시키고 기존 노예에게 다른 일 처리 시킴

console.log("setTimeout 전 코드");

setTimeout(() => {
  console.log("5000ms 후 실행");
}, 5000);

setTimeout(() => {
  console.log("1000ms 후 실행");
}, 1000);

setTimeout(() => {
  console.log("2000ms 후 실행");
}, 2000);

let start = Date.now();
while (Date.now() - start < 3000) {
  // 3초간 블로킹
}

console.log("setTimeout 후 코드");
