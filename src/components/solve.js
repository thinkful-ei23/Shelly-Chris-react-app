import React from "react";
import DropDown from "./dropdownmenu";

export default class Solve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <DropDown />
      </div>
    );
  }
}
