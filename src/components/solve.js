import React from 'react';
import Pythagoras from './pythagoras';
import Hypotenuse from './pythag-output';
import DropDown from './dropdownmenu';

export default class Solve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'Formulas',
			sideA: 3,
			sideB: 4,
			sideC: 12
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ display: event.target.value });
		console.log(event.target.value);
	}

	setSideA(sideA) {
		this.setState({ sideA });
	}

	setSideB(sideB) {
		this.setState({ sideB });
	}

	setSideC(sideC) {
		this.setState({ sideC });
	}

	render() {
		if (this.state.display === 'quadratic-equation') {
			//set the math variables with the values inside the inputs
			const a = this.state.sideA;
			const b = this.state.sideB;
			const c = this.state.sideC;
			//put the values into the quadratic equation and code Math operations to find x
			// -b +- squarert(b^2 - 4ac) / 2a
			const pt2 = Math.pow(b, 2);
			const pt3 = 4 * a * c;
			const square = Math.sqrt(Math.abs(pt2 - pt3));
			const denominator = 2 * a;
			const answer = (-b - square) / denominator;
			const answer2 = (-b + square) / denominator;

			return (
				<form>
					<Pythagoras
						id="a"
						label="a = "
						min={-100}
						max={100}
						value={this.state.sideA}
						onChange={value => this.setSideA(value)}
					/>
					<Pythagoras
						id="b"
						label="b = "
						min={-100}
						max={100}
						value={this.state.sideB}
						onChange={value => this.setSideB(value)}
					/>
					<Pythagoras
						id="c"
						label="c = "
						min={-100}
						max={100}
						value={this.state.sideC}
						onChange={value => this.setSideC(value)}
					/>
					<Hypotenuse id="x" label="x = " value={answer.toFixed(2)} />
					<Hypotenuse id="x" label="or x = " value={answer2.toFixed(2)} />
					<DropDown changeListener={this.handleChange} />
				</form>
			);
		}

		if (this.state.display === 'pythagoream-theorum') {
			const answer = Math.sqrt(
				Math.pow(this.state.sideA, 2) + Math.pow(this.state.sideB, 2)
			);

			return (
				<form>
					<Pythagoras
						id="side-a"
						label="Side a = "
						min={0}
						max={100}
						value={this.state.sideA}
						onChange={value => this.setSideA(value)}
					/>
					<Pythagoras
						id="side-b"
						label="Side b = "
						min={0}
						max={100}
						value={this.state.sideB}
						onChange={value => this.setSideB(value)}
					/>
					<Hypotenuse
						id="hypotenuse"
						label="Side c = "
						value={answer.toFixed(2)}
					/>
					<DropDown changeListener={this.handleChange} />
				</form>
			);
		} else {
			return (
				<form>
					<DropDown changeListener={this.handleChange} />
				</form>
			);
		}
	}
}
