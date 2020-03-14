import React from "react";
//import Joke from "./joke";
import todoData from "./components/tododata";
import Listings from "./components/Listing";
import "./components/assets/css/list.css";
export default App => {
  const todocomponents = todoData.map(listitem => (
    <Listings key={listitem.id} listitem={listitem} />
  ));
  return <div className="content-view">{todocomponents}</div>;
};
