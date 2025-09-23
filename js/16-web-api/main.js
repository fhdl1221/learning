// axios 불러오기
import axios from "axios";

// async/await

async function connectTest() {
  // axios.get(url) : 데이터 요청에 대한 응답을 반환
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response["data"]);
  // console.table(Object.entries(response));
}
connectTest();
