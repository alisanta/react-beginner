import React from "react";

export default function ContactCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imgUrl} alt="Just" />
      <h3> {props.name}</h3>
      <p>Phone : {props.phone}</p>
      <p>Email : {props.email}</p>
    </div>
  );
}
