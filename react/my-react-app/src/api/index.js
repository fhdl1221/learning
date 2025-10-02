import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// create() : axios 객체를 생성
// 객체 : 속성(key - value) 구성된 자료형

// 아래 axiosInstance 변수로 요청을 보내면
// 작성한 기본 주소, 헤더에는 인증 정보가 설정되어 요청이 간다.
const axiosInstance = axios.create({
  // axios 객체가 가질 속성의 정보
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000,
});

export default axiosInstance;
// axios.get("/posts")
// 만들어지는 URL : baseURL 속성 값 + "/posts"
// https://dummyjson.com/posts

// const axiosInstance2 = axios.create({
//   baseURL: "",
//   headers: {},
//   timeout: 1000,
// });
