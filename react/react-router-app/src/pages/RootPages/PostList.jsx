import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; // 쿼리 파라미터 관리

import PATHS from "../../constants/paths";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  // searchParams: 쿼리 파라미터 값을 가진 객체
  // setSearchParams: 쿼리 파라미터 값을 변경하는 함수
  const [searchParams, setSearchParams] = useSearchParams("asc");

  useEffect(() => {
    // 쿼리 파라미터에서 key가 order인 값을 불러오기
    const order = searchParams.get("order") ?? "id";
    const sortBy = searchParams.get("sortBy") ?? "asc";

    async function getPosts() {
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      const data = res.data.posts;
      setPosts(data);
    }
    getPosts();
  }, [searchParams]);
  // 의존성 배열에 searchParams를 넣어서 쿼리 파라미터가 변경되면 useEffect 콜백 함수를 실행

  function handleClick(sortBy, order) {}

  return (
    <div className="p-2">
      <div className="flex gap-2 mt-2 mb-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={PATHS.ROOT.getPostDetail(post.id)}>
            No. {post.id} - {post.title}
            <br />
          </Link>
        );
      })}
    </div>
  );
}
