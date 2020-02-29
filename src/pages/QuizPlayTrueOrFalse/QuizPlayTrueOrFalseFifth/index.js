import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TerraPlana from "../../../assets/astronomia/terraplana.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseFifth() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>ASTRONOMIA</h2>
        <h5>VERDADEIRO OU FALSO?</h5>
        <Box>
          <div className="boxitem">
            <strong>A terra é plana?</strong>
            <img src={TerraPlana} alt="Terra Plana" />
            <div className="divbutton">
              <Link to="/quizplaytrueorfalseresult">
                <button type="button">VERDADEIRO</button>
              </Link>
              <Link to="/quizplaytrueorfalseresult">
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
