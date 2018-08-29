import React from 'react';

export default function solvePythagoras(props) {
	return (
		<div className="pythagoras-form">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type="number"
				id={props.id}
				min={props.min}
				max={props.max}
				onChange={e => props.onChange(e.target.value)}
				value={props.value}
			/>
		</div>
	);
}
