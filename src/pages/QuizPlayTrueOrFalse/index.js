import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Plutao from "../../assets/astronomia/plutão.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalse() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>ASTRONOMIA</h2>
        <h5>VERDADEIRO OU FALSO?</h5>
        <Box>
          <div className="boxitem">
            <strong>Plutão é um planeta anão?</strong>
            <img src={Plutao} alt="Plutão" />
            <div className="divbutton">
              <button type="button">VERDADEIRO</button>
              <button className="false" type="button">
                FALSO
              </button>
            </div>
          </div>
        </Box>
      </BoxItens>
      <Footer />
    </Container>
  );
}
