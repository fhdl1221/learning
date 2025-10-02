import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/popular`,
        headers: { //TMDB에게 보내는 정보
          "Content-Type": "application/json",
          accept: "application/json", //정보를 줄 때 json 형태로 줬으면 좋겠어라고 부탁하는 것
          Authorization: `Bearer ${API_KEY}`,  // 인증 정보
        },
        params: {
          language: "ko-KR",
          page: 1,
        },
      };

      const res = await axios(config);
      setMovies(res["data"]["results"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
