import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Day from './calendar/day';
import Month from './calendar/month';


ReactDOM.render(<Day />, document.getElementById('day'));
ReactDOM.render(<Month month={11} year={2019}/>, document.getElementById('month'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
