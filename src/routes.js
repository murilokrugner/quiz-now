import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuizPlayTrueOrFalseIntro from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseIntro";
import QuizPlayTrueOrFalseFirst from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseFirst";
import QuizPlayTrueOrFalseSecond from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseSecond";
import QuizPlayTrueOrFalseThird from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseThird";
import QuizPlayTrueOrFalseFourth from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseFourth";
import QuizPlayTrueOrFalseFifth from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseFifth";
import QuizPlayTrueOrFalseResult from "./pages/QuizPlayTrueOrFalse/QuizPlayTrueOrFalseResult";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/quizplaytrueorfalseintro"
          component={QuizPlayTrueOrFalseIntro}
        />
        <Route
          path="/quizplaytrueorfalsefirst"
          component={QuizPlayTrueOrFalseFirst}
        />
        <Route
          path="/quizplaytrueorfalsesecond"
          component={QuizPlayTrueOrFalseSecond}
        />
        <Route
          path="/quizplaytrueorfalsethird"
          component={QuizPlayTrueOrFalseThird}
        />
        <Route
          path="/quizplaytrueorfalseFourth"
          component={QuizPlayTrueOrFalseFourth}
        />
        <Route
          path="/quizplaytrueorfalseFifth"
          component={QuizPlayTrueOrFalseFifth}
        />
        <Route
          path="/quizplaytrueorfalseresult"
          component={QuizPlayTrueOrFalseResult}
        />
      </Switch>
    </BrowserRouter>
  );
}
