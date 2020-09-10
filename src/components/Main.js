import React from "react";
import Button from "react-bootstrap/Button";

export default function Main() {
  const myName = "Alist";
  return (
    <div>
      <h1>Hello {myName}</h1>
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
