import React from 'react';
import FormulaButton from './formula-buttons';
import Pythagoras from './pythagoras';
import Hypotenuse from './pythag-output';

export default class Solve extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'Formulas',
			sideA: 3,
			sideB: 4
		};
	}

	showPythagoras() {
		this.setState({
			display: 'Pythagoras'
		});
	}

	setSideA(sideA) {
		this.setState({ sideA });
	}

	setSideB(sideB) {
		this.setState({ sideB });
	}

	render() {
		if (this.state.display === 'Pythagoras') {
			const answer = Math.sqrt(
				Math.pow(this.state.sideA, 2) + Math.pow(this.state.sideB, 2)
			);

			return (
				<form>
					<Pythagoras
						id="side-a"
						label="Side a"
						min={0}
						max={100}
						value={this.state.sideA}
						onChange={value => this.setSideA(value)}
					/>
					<Pythagoras
						id="side-b"
						label="Side b"
						min={0}
						max={100}
						value={this.state.sideB}
						onChange={value => this.setSideB(value)}
					/>
					<Hypotenuse
						id="hypotenuse"
						label="Side C"
						value={answer.toFixed(2)}
					/>
				</form>
			);
		} else {
			return <FormulaButton onClick={e => this.showPythagoras()} />;
		}
	}
}
