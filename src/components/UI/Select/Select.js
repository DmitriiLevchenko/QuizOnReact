import React from "react";
import "./Select.css";

const Select = (props) => {
  const label = props.label || "text";
  const htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className={"Select"}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((opt, key) => {
          return <option key={opt.value}>{opt.text}</option>;
        })}
      </select>
    </div>
  );
};
export default Select;
