import React from 'react';

export default function solvePythagoras(props) {
	return (
		<div>
			<form>
				<label>a: </label>
				<input type="number" className="first-variable" />

				<label>b: </label>
				<input type="number" className="second-variable" />

				<label>c: </label>
				<div />
				{/* <input type="number" className="third-variable" /> */}
			</form>
		</div>
	);
}
