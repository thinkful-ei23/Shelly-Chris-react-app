import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Solve from '../src/components/solve';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Solve />, document.getElementById('root'));
registerServiceWorker();
