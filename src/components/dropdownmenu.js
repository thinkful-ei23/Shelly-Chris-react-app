import React from "react";

export default function dropDown(props) {
  return (
    <div>
      <h1>Calculator</h1>
      <form>
        <label>What problem do you want to solve: </label>
        <select name="Formula-list" id="formulas">
          <option selected="selected">Pythagoras Theorem</option>
          <option>Quadratic Formula</option>
        </select>
      </form>
    </div>
  );
}
