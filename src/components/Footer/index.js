import React from "react";
import { Container, FooterBox } from "./styles";

export default function Footer() {
  return (
    <Container>
      <FooterBox>
        <div className="signup">
          <span>copyright - Knowledge | CEO - Murilo Krugner</span>
          <button type="button">SAIR</button>
        </div>
      </FooterBox>
    </Container>
  );
}
