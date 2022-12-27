import React from "react";
export default function Joke(props) {
  console.log(props);
  return (
    <div>
      <h2>question:{props.question}</h2>
      <h2>answer:{props.punchline}</h2>
    </div>
  );
}
