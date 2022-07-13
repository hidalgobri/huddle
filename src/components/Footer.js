import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import { Input } from "./styles/Footer.styled";
import { Form } from "./styles/Footer.styled";
import { CodedBy } from "./styles/Footer.styled";
import { Button } from "./styles/Button.styled";


export default function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          <img src="./images/logo_white.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
        </div>
        <div>
          <h2>NEWSLETTER</h2>
          <p>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <Form>
            <Input type="text" />
            <Button bg="#FF76CE" color="#fff">
              SUBSCRIBE
            </Button>
          </Form>
        </div>
      </StyledFooter>
      <CodedBy>
        Coded with &#9825; by{" "}
        <a href="https://github.com/hidalgobri" target="_blank">
          Valeria Hidalgo C
        </a>
      </CodedBy>
    </>
  );
}
