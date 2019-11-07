import React from "react";
import Day from "../day";
import "./index.css";
export default class extends React.Component {
  render() {
    const {
      firstDay,
      numberOfDays,
      monthName,
      prevMonthAction,
      nextMonthAction,
      activeDays
    } = this.props;

    // prev month button
    let prevMonth = prevMonthAction ? (
      <div className="calNavigation" onClick={prevMonthAction}>
        {"<"}
      </div>
    ) : null;

    // next month button
    let nextMonth = nextMonthAction ? (
      <div className="calNavigation" onClick={nextMonthAction}>
        {">"}
      </div>
    ) : null;

    // calculate days
    let days = [];
    let weeks = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="dayCell" key={`blankday-${i}`}></div>);
    }
    for (let i = 1; i <= numberOfDays; i++) {
      days.push(
        <div className="dayCell" key={`day-${i}`}>
          <Day number={i} isActive={activeDays[i]} />
        </div>
      );
    }

    // calculate weeks
    let weekNumber = 0;
    while (weekNumber < 6) {
      weeks.push(
        <div className="week" key={`week-${++weekNumber}`}>
          {days.splice(0, 7)}
        </div>
      );
    }

    // render
    return (
      <div className="month">
        <div className="header">
          {prevMonth}
          <div className="monthName">{monthName}</div>
          {nextMonth}
        </div>
        <div className="days">{weeks}</div>
      </div>
    );
  }
}
