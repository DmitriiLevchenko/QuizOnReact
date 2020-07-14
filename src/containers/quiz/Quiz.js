import React, { Component } from "react";
import "./Quiz.css";
import "../../components/ActiveQuiz/ActiveQuiz";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz"
import Spinner from "../../components/UI/Spinner/Spinner"
class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQustion: 0,
    answerState: null, // {[id]: 'sucess' or 'error'}
    quiz:[],
    loadig: true,
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
    const results = this.state.results;

    if (question.rightAnswerId === AnswerId) {
      if (!results[AnswerId]) {
        results[AnswerId] = "sucess";
      }
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
      }, 750);
    } else {
      results[question.id] = "error";
      console.log("erorr");
      this.setState({
        results,
        answerState: { [AnswerId]: "erorr" },
      });
    }
  };
  async componentDidMount(){
    try{
      const response = await axios.get(`quiz/${this.props.match.params.id}.json`)
      const quiz = response.data;
      this.setState({
        quiz,
        loadig:false,
      })
    }catch(e){
      console.log(e)
    }
  }
  render() {
    return (
      this.state.loadig
        ?<Spinner/>
        :<div className={"Quiz"}>
        <div className={"Quiz-wrapper"}>
          <h1>Quiz</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
            ></FinishedQuiz>
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
