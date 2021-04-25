import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "./PostsList";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);
    setPosts(res.data);
    setLoading(false);
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <PostsList postItems={posts} />
    </>
  );
}
