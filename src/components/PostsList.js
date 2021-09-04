import React from "react";

function PostsList({ postItems }) {
  return (
    <ul>
      {postItems.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsList;
