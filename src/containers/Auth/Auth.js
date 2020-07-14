import React, { Component } from "react";
import "./Auth.css";
import { Button } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";
import { validate } from "../../containers/form/formFramework";
import axios from "axios";
export default class Auth extends Component {
  onChangeHandler = (event, controlName) => {
    if (controlName === "name") {
      this.setState({
        UserName: event.target.value,
      });
    }
    const CopyOfInputs = { ...this.state.inputs };
    const Copyinput = CopyOfInputs[controlName];
    Copyinput.value = event.target.value;
    Copyinput.touched = true;
    Copyinput.validate = validate(Copyinput.value, Copyinput.validateRules);
    CopyOfInputs[controlName] = Copyinput;
    let isFormValid = true;
    Object.keys(this.state.inputs).forEach((name) => {
      isFormValid = this.state.inputs[name].validate && isFormValid;
    });
    this.setState({
      inputs: CopyOfInputs,
      isFormValid,
    });
  };
  state = {
    isFormValid: false,
    UserName: "Birdus",
    inputs: {
      name: {
        type: "text",
        placeholder: "Birdus",
        LabelText: "name",
        validate: false,
        shouldValidate: true,
        touched: false,
        erorText: "Something went wrong",
        validateRules: { required: true },
      },
      email: {
        type: "text",
        placeholder: "ddlss546@ukr.net",
        LabelText: "email",
        validate: false,
        shouldValidate: true,
        touched: false,
        erorText: "Something went wrong",
        validateRules: {
          email: true,
          required: true,
        },
      },
      password: {
        type: "password",
        placeholder: "4389uit",
        LabelText: "password",
        validate: false,
        shouldValidate: true,
        touched: false,
        erorText: "Something went wrong",
        validateRules: {
          minLenght: 6,
        },
      },
    },
  };
  loginHandler = async () => {
    const authData = {
      email: this.state.inputs.email.value,
      password: this.state.inputs.password.value,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCV4ageYK4WcUKAQlUzYgUyzeHWaFGW5ro",
        authData
      );
      alert("Login Sucess")

      console.log(response.data);
    } catch (e) {
      console.log(e);
      alert("Erorr " + e)
    }
  };

  registerHandler = async () => {
    const authData = {
      email: this.state.inputs.email.value,
      password: this.state.inputs.password.value,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCV4ageYK4WcUKAQlUzYgUyzeHWaFGW5ro",
        authData
      );
      alert("Register Sucess")

      console.log(response.data);
    } catch (e) {
      console.log(e);
      alert("Erorr " + e)
    }
  };
  OnSubmitHandler = (event) => {
    event.preventDefault();
  };
  renderInputs = () => {
    return Object.keys(this.state.inputs).map((controlName, key) => {
      const input = this.state.inputs[controlName];
      return (
        <Input
          value={input.value}
          key={key}
          type={input.type}
          placeholder={input.placeholder}
          LabelText={input.LabelText}
          validate={input.validate}
          shouldValidate={input.shouldValidate}
          touched={input.touched}
          erorText={input.erorText}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        ></Input>
      );
    });
  };
  render() {
    return (
      <div className={"Auth"}>
        <div>
          <h1>
            {this.state.UserName.trim() !== ""
              ? "Hello " + this.state.UserName
              : "Hello " + "Unnamed User"}
          </h1>
          <form onSubmit={this.OnSubmitHandler}>
            {this.renderInputs()}
            <Button
              className={"btn"}
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Login
            </Button>
            <Button
              className={"btn"}
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
