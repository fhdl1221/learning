import axios from "axios";

async function putProduct() {
  // axios 설정 객체 config
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "put",
    header: { "Content-Type": "application/json" },
    data: {
      title: "갤럭시",
    },
  };

  // 응답 데이터 저장
  const response = await axios(config);

  // 응답 데이터에서 data 속성 추출
  const data = response["data"];

  console.log(data);
}
putProduct();