import React from "react";
import FormulaButton from "./formula-buttons";
import Pythagoras from "./pythagoras";

export default class Solve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Math"
    };
  }

  showPythagoras() {
    this.setState({
      display: "Pythagoras"
    });
  }

  render() {
    if (this.state.display === "Pythagoras") {
      return <Pythagoras onClick={e => this.showPythagoras()} />;
    } else if (this.state.display === "Math") {
      return <FormulaButton />;
    }
  }
}
