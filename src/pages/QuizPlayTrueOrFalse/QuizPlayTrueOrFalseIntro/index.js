import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Astro from "../../../assets/astronomia/astronomia.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseIntro() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>Você sabe tudo sobre:</h2>
        <h2>ASTRONOMIA ?</h2>
        <Box>
          <div className="boxitem">
            <strong>
              Descubra respondendo se essas informações se são verdadeiras ou
              falsas
            </strong>
            <img src={Astro} alt="Quiz Astronomia" />
            <div className="divbutton">
              <Link to="/quizplaytrueorfalsefirst">
                <button type="button">JOGAR</button>
              </Link>
            </div>
          </div>
        </Box>
      </BoxItens>
      <Footer />
    </Container>
  );
}
