import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Astro from "../../../assets/astronomia/astronomia.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseResult() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>Resultado do quiz de:</h2>
        <h2>ASTRONOMIA</h2>
        <Box>
          <div className="boxitem">
            <strong>Parabéns por responder todas as perguntas!</strong>
            <img src={Astro} alt="Quiz Astronomia" />
            <span>Resultado: 5 acertos de 5 perguntas</span>
            <div className="divbutton">
              <Link to="/">
                <button type="button">INICIO</button>
              </Link>
              <button type="button">COMPARTILHAR</button>
            </div>
          </div>
        </Box>
      </BoxItens>
      <Footer />
    </Container>
  );
}
