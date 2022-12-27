import React from "react";
import "./assets/css/list.css";
export default function Listing(props) {
  return (
    <div className="ckbox">
      <p>
        <input type="Checkbox" checked={props.listitem.completed} />
        {props.listitem.text}
      </p>
    </div>
  );
}
