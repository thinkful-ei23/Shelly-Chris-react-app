import React from 'react';

export default function dropDown(props) {
	return (
		<div>
			<h1>What Do You Want to Solve?</h1>
			<select onChange={props.changeListener}>
				<option value="Math"> </option>
				<option value="pythagoream-theorum">Pythagorean Theorum</option>
				<option value="quadratic-equation">Quadratic Equation</option>
			</select>
		</div>
	);
}
