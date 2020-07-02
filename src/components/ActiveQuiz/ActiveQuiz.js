import React from "react";
import "./ActiveQuiz.css";
import "./AnswersList/AnswersList";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className={"ActiveQuiz"}>
      <p className={"Qustion"}>
        <span>
          <strong> 1.</strong>
          {props.question}
        </span>

        <small>
          {props.answerNumder} / {props.quizLenght}
        </small>
      </p>
      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state = {props.state}
      ></AnswersList>
    </div>
  );
};
export default ActiveQuiz;
