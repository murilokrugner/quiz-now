import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BigBang from "../../../assets/astronomia/bigbang.jpeg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseThird() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>ASTRONOMIA</h2>
        <h5>VERDADEIRO OU FALSO?</h5>
        <Box>
          <div className="boxitem">
            <strong>A terra foi criada a partir da teoria do Big Bang?</strong>
            <img src={BigBang} alt="Big Bang" />
            <div className="divbutton">
              <Link to="/quizplaytrueorfalsefourth">
                <button type="button">VERDADEIRO</button>
              </Link>
              <Link to="/quizplaytrueorfalsefourth">
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
