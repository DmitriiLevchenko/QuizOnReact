import React, { Component } from "react";
import "./Quiz.css";
import "../../components/ActiveQuiz/ActiveQuiz";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQustion: 0,
    answerState: null, // {[id]: 'sucess' or 'error'}
    quiz: [
      {
        question: "4+5 = ",
        rightAnswerId: 4,
        answers: [
          { text: "3", id: 1 },
          { text: "5", id: 2 },
          { text: "7", id: 3 },
          { text: "-9", id: 4 },
        ],
      },
      {
        question: "/*3*/3 != ",
        rightAnswerId: 4,
        answers: [
          { text: "false", id: 1 },
          { text: "3", id: 2 },
          { text: "null", id: 3 },
          { text: "3!=", id: 4 },
        ],
      },
    ],
  };
  isQuizfinished() {
    return this.state.quiz.length === this.state.activeQustion + 1;
  }
  onAnswerClickHandler = (AnswerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "sucess") {
        console.log("skip");
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQustion];
    if (question.rightAnswerId === AnswerId) {
      this.setState({
        answerState: { [AnswerId]: "sucess" },
      });
      const timeout = setTimeout(() => {
        if (this.isQuizfinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQustion: this.state.activeQustion + 1,
          });
        }
        this.setState({
          answerState: null,
        });
        clearTimeout(timeout);
      }, 1000);
    } else {
      console.log("erorr");
      this.setState({
        answerState: { [AnswerId]: "erorr" },
      });
    }
  };
  render() {
    return (
      <div className={"Quiz"}>
        <div className={"Quiz-wrapper"}>
          <h1>Quiz</h1>
          {this.state.isFinished ? (
            <FinishedQuiz></FinishedQuiz>
          ) : (
            <ActiveQuiz
              question={this.state.quiz[this.state.activeQustion].question}
              answers={this.state.quiz[this.state.activeQustion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLenght={this.state.quiz.length}
              answerNumder={this.state.activeQustion + 1}
              state={this.state.answerState}
            ></ActiveQuiz>
          )}
        </div>
      </div>
    );
  }
}
export default Quiz;
