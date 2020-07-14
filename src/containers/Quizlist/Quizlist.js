import React, { Component } from "react";
import "./Quizlist.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default class Quizlist extends Component {
  state = {
    loading: true,
    quizes: [],
  };
  renderQuizes() {
    return this.state.quizes.map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz.id}>Test {quiz.name}</NavLink>
        </li>
      );
    });
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://react-quiz-d2738.firebaseio.com/quiz.json"
      );
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test ${index + 1}`,
        });
      });
      this.setState({
        quizes,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className={"Quizlist"}>
        <h1>Quiz list</h1>
        <div>
          {this.state.loading ? <Spinner /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}
