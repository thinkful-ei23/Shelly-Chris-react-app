import React from "react";

export default function dropDown(props) {
  return (
    <div>
      <h1>Calendar</h1>
      <form>
        <label>What problem do you want to solve?</label>
        <select name="existAppt" id="existing">
          <option>Hypotenuse for right triangle</option>
          <option selected="selected">Quadratic Formula</option>
        </select>
      </form>
    </div>
  );
}
