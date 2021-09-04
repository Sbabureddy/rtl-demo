import axios from "axios";
import React, { useState, useEffect } from "react";
import PaginateItem from "./PaginateItem";

function Paginate() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexofLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const paginagte = (pageNum) => setCurrentPage(pageNum);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <PaginateItem
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginagte}
      />
    </div>
  );
}

export default Paginate;
