import React, { Component } from "react";
import "./Draweer.css";
import {NavLink} from 'react-router-dom'
import "../../UI/Button/BackDrop/BackDrop";
import BackDrop from "../../UI/Button/BackDrop/BackDrop";
const links = [{
  to:'/',
  label: 'List of quiz',
  icon: 'fa fa-list-ol',
  exact: true,
},
{
  to:'/auth',
  label: 'Authorization',
  icon: 'fa fa-user-circle-o',
  exact: false,
},{
  to:'/quiz-creater',
  label: 'Create quiz',
  icon: 'fa fa-plus',
  exact: false,
}];
class Draweer extends Component {
  OnClickHandler = () => {this.props.onClose()}
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to = {link.to} exact={link.exact} activeClassName={'active'} onClick={this.OnClickHandler}><i className={link.icon}></i> {link.label}</NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = ["Draweer"];
    if (!this.props.isOpen) {
      cls.push("close");
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen?<BackDrop onClick ={this.props.onClose}/>:null}
        
      </React.Fragment>
    );
  }
}
export default Draweer;
