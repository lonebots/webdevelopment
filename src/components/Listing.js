import React from "react";
import "./assets/css/list.css";

function Listings(props) {
  return (
    <div className="ckbox">
      <input type="Checkbox"></input>
      <p>{props.item.text}</p>
    </div>
  );
}
export default Listings;
