import React from 'react';

export default function Hypotenuse(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{props.label}</label>
			<output id={props.id}>{props.value}</output>
		</div>
	);
}

Hypotenuse.defaultProps = {
	value: 0
};
