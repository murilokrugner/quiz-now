import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Quiz from "../../assets/quiz.png";

import { Container, BoxItens, Box } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />

      <BoxItens>
        <h2>TODOS OS QUIZ</h2>
        <Box>
          <div className="boxitem">
            <img src={Quiz} alt="Quiz" />
            <strong>Nome do quiz</strong>
            <button type="button">Jogar</button>
          </div>
        </Box>
        <Box>
          <div className="boxitem">
            <img src={Quiz} alt="Quiz" />
            <strong>Nome do quiz</strong>
            <button type="button">Jogar</button>
          </div>
        </Box>
        <Box>
          <div className="boxitem">
            <img src={Quiz} alt="Quiz" />
            <strong>Nome do quiz</strong>
            <button type="button">Jogar</button>
          </div>
        </Box>
        <Box>
          <div className="boxitem">
            <img src={Quiz} alt="Quiz" />
            <strong>Nome do quiz</strong>
            <button type="button">Jogar</button>
          </div>
        </Box>
      </BoxItens>
      <Footer />
    </Container>
  );
}
