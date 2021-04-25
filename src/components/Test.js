import React, { useEffect, useState } from "react";

import axios from "axios";
function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);
    setData(res.data);
  };
  return (
    <div className="App">
      <ul style={{ textAlign: "left" }}>
        {data.map((item, key) => {
          return <li key={key}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default Test;
