import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Lua from "../../../assets/astronomia/lua.jpg";
import { Container, BoxItens, Box } from "./styles";

export default function QuizPlayTrueOrFalseSecond() {
  return (
    <Container>
      <Header />
      <BoxItens>
        <h2>ASTRONOMIA</h2>
        <h5>VERDADEIRO OU FALSO?</h5>
        <Box>
          <div className="boxitem">
            <strong>Essa é a lua?</strong>
            <img src={Lua} alt="Lua" />
            <div className="divbutton">
              <Link to="/quizplaytrueorfalsethird">
                <button type="button">VERDADEIRO</button>
              </Link>
              <Link to="/quizplaytrueorfalsethird">
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
