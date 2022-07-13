import React from "react";
import { Container } from "./styles/Card.styled";

export default function Card(props) {
  return (
    <Container fdirection={ props.id % 2 === 0 || "row-reverse"}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <img src={props.image} width={"100%"}/>
    </Container>
  );
}
