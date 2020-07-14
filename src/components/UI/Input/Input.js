import React from "react";
import { FormControl } from "react-bootstrap";
import "./Input.css";
function isValidate({ validate, shouldValidate, touched }) {
  return !validate && shouldValidate && touched;
}
const Input = (props) => {
  const value = props.value || "";
  const type = props.type || "text";
  const cls = ["input"];
  const placeholder = props.placeholder || "input something here";
  const htmlFor = `${props.type} + ${Math.random()}`;
  const LabelText = props.LabelText || "input";
  if (isValidate(props)) {
    cls.push("invalid");
  }
  return (
    <React.Fragment>
      <label className="label" htmlFor={htmlFor}>
        {LabelText}
      </label>
      <FormControl
        value={value}
        type={type}
        placeholder={placeholder}
        className={cls.join(" ")}
        id={htmlFor}
        onChange={props.onChange}
      />
      {isValidate(props) ? <p>{props.erorText}</p> : null}
    </React.Fragment>
  );
};
export default Input;
