import React from "react";
//import Joke from "./joke";
import todoData from "./components/tododata";
import Listings from "./components/Listing";
export default App => {
  const todoItems = todoData.map(item => (
    <Listings key={item.id} item={item} />
  ));

  return <div className="content-view">{todoItems}</div>;
};
