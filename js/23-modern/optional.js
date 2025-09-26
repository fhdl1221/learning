// ["속성명"]
// .속성명
//  옵셔널 체이닝 -> ?.속성명

const user = {
  address: { city: "서울" },
};

console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.country);

console.log(user?.contact?.mail);
console.log(user?.contact?.phone);
