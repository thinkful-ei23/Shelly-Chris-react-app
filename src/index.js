import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalendarList from './src/components/calendar-list';
import calendar from './src/calendar'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CalendarList weeklyCalendar={calendar}>, document.getElementById('root'));
registerServiceWorker();
