import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.completed ? "checked" : ""} />{" "}
      {props.item.text}
    </div>
  );
}
