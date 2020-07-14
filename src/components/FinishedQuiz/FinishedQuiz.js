import React from "react";
import "./FinishedQuiz.css";
import "../UI/Button/Button"
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
  const sucesscount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "sucess") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={"FinishedQuiz"}>
      Finished
      <ul>
        {props.quiz.map((quizitem, index) => {
          const cls = [
            "fa",
            props.results[quizitem.id] === "error" ? "fa-times" : "fa-check",
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.{quizitem.question}
              <i className={cls.join(" ")}></i>
            </li>
          );
        })}
      </ul>
      <p>
        Correct {sucesscount}/{props.quiz.lenght}
      </p>
      <Button onClick = {props.onRetry} type = "primary">Restart</Button>
      <Button onClick = {props.onRetry} type = "sucess">List of test</Button>
    </div>
  );
};
export default FinishedQuiz;
