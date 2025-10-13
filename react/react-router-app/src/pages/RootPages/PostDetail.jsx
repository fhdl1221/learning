import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getSinglePost() {
      const res = await axios.get(`https://dummyjson.com/posts/${postId}`);
      const data = res.data;
      setPost(data);
    }
    getSinglePost();
  }, [postId]);

  return (
    <div>
      <Link to="/posts">게시글 목록 페이지로 이동</Link>
      <h1 className="text-2xl">게시글 상세 페이지</h1>
      <div>
        <p>Post ID: {postId}</p>
        {post && (
          <>
            <p>Post 제목: {post.title}</p>
            <p>Post 내용: {post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
