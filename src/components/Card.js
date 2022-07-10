import React from "react";
import { TwoColGrid } from "./styles/TwoColGrid.styled";

export default function Card(props) {
  return (
    <TwoColGrid>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <img src={props.image} width={"100%"}/>
    </TwoColGrid>
  );
}
