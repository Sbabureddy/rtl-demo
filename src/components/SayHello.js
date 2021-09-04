import React from "react";

function SayHello({ name }) {
  if (name) {
    return (
      <h2>
        Hello
        {name}!
      </h2>
    );
  }
  return <h3>Howdy!</h3>;
}

export default SayHello;
