import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Terra from "../../../assets/astronomia/terra.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseFourth() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>ASTRONOMIA</h2>
        <h5>VERDADEIRO OU FALSO?</h5>
        <Box>
          <div className="boxitem">
            <strong>A Terra tem 510.100.000 km² ?</strong>
            <img src={Terra} alt="Terra" />
            <div className="divbutton">
              <Link to="/quizplaytrueorfalsefifth">
                <button type="button">VERDADEIRO</button>
              </Link>
              <Link to="/quizplaytrueorfalsefifth">
                <button className="false" type="button">
                  FALSO
                </button>
              </Link>
            </div>
          </div>
        </Box>
      </BoxItens>
      <Footer />
    </Container>
  );
}
