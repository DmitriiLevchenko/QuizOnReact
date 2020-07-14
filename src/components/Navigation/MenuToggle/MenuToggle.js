import React from "react";
import "./MenuToggle.css";

const MenuToggle = (props) => {
  const cls = ["MenuToggle", "fa"];
  if (props.isOpen) {
    cls.push("fa-times");
    cls.push("open");
  } else {
    cls.push("fa-bars");
  }
  return (
  <i onClick = {props.onToggle} className={cls.join(' ')}></i>
  );
};
export default MenuToggle;
