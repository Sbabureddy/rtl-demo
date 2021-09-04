import React from "react";

function PaginateItem({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul>
      {pageNumbers.map((num) => (
        <li key={num}>
          <a onClick={() => paginate(num)} href="!#">
            {num}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PaginateItem;
