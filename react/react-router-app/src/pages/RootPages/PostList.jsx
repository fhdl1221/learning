import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://dummyjson.com/posts");
      const data = res.data.posts;
      setPosts(data);
    }
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            No. {post.id} - {post.title}
            <br />
          </Link>
        );
      })}
    </div>
  );
}
