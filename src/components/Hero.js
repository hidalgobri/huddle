import React from "react";
import { TwoColGrid } from "./styles/TwoColGrid.styled";
import { Button } from "../components/styles/Button.styled";
import { Image } from "./styles/Image.styled";

export default function Hero() {
  return (
    <TwoColGrid>
      <div>
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button bg="#FF89D5">Get Started For Free</Button>
      </div>
      <div>
        <img src="./images/illustration-mockups.svg" width="100%" />
      </div>
    </TwoColGrid>
  );
}
