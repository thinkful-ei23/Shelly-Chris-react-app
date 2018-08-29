import React from 'react';

export default function Calendar(props) {
	const weeklyCalendar = props.weeklyCalendar.map((calendar, index) =>
		<li name="day-of-week" key={index}>
			<b>{weeklyCalendar.day}</b>
			<br />
			{weeklyCalendar.appointment}
			<br />
			{weeklyCalendar.description}
		</li>
	)
}