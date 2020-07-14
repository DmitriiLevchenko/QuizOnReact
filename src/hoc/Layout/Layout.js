import React, { Component } from "react";
import "./Layout.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Draweer from "../../components/Navigation/Draweer/Draweer"
class Layout extends Component {
  state = {
    menu: false,
  };
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  toggleBreakHandler = () => {
    this.setState({
      menu: false,
    });
  };

  render() {
    return (
      <div className={"Layout"}>
        <Draweer isOpen = {this.state.menu} onClose={this.toggleBreakHandler} ></Draweer>
        <MenuToggle onToggle={this.toggleMenuHandler} isOpen = {this.state.menu} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
