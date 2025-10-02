import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };
      const res = await axios(config);
      setMovie(res["data"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
}
