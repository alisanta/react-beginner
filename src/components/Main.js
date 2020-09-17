import React from "react";
import Button from "react-bootstrap/Button";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";

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
      <h2>To Do List </h2>
      <div className="todolist">
        <TodoItem /> Snorlex
        <TodoItem /> Charizard
        <TodoItem /> Mewchuu
      </div>
      <div>
        <ContactCard
          contact={{
            name: "Meochoo",
            imgUrl: "",
            email: "aa@gg",
            phone: "01010"
          }}
        />
        <ContactCard
          contact={{
            name: "Snorlex",
            imgUrl: "",
            email: "bb@gg",
            phone: "01010"
          }}
        />
        <ContactCard
          contact={{
            name: "Pikachu",
            imgUrl: "",
            email: "cc@gg",
            phone: "01010"
          }}
        />
        <ContactCard
          contact={{
            name: "Charizard",
            imgUrl: "",
            email: "dd@gg",
            phone: "01010"
          }}
        />
      </div>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
    </div>
  );
}
