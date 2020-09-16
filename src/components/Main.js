import React from "react";
import Button from "react-bootstrap/Button";

export default function Main() {
  const myName = "Alist";
  const myGrade = "73";
  let todayDate = new Date();
  const inlineStyle = {
    color: "#FF5500",
    backgroundColor: "yellow",
    fontSize: "18px"
  };
  return (
    <div>
      <h1>
        Hello{" "}
        <span style={{ color: "#FF0000", backgroundColor: "grey" }}>
          {" "}
          {myName}{" "}
        </span>{" "}
        <span style={inlineStyle}>{myGrade}</span> {todayDate.toLocaleString()}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        <li>fafaee</li>
        <li>rere</li>
      </ul>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
    </div>
  );
}
