import React from "react";
import { HeroStyled } from "./styles/Hero.styled";
import { Button } from "../components/styles/Button.styled";
import { Image } from "./styles/Image.styled";

export default function Hero() {
  return (
    <HeroStyled>
      <div>
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button bg="#FF76CE" color="#FFF">Get Started For Free</Button>
      </div>

      <img src="./images/illustration-mockups.svg" width="100%" />
    </HeroStyled>
  );
}
