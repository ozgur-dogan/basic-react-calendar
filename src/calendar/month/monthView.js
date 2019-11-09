import React from "react";
import PropTypes from "prop-types";
import Day from "../day";
import "./monthView.scss";
class MonthView extends React.Component {
  render() {
    const {
      firstDay,
      numberOfDays,
      monthName,
      year,
      prevMonthAction,
      nextMonthAction
    } = this.props;

    // render prev month button
    let prevMonth = prevMonthAction ? (
      <div className="calNavigation" onClick={prevMonthAction}>
        {"⇦"}
      </div>
    ) : null;

    // render next month button
    let nextMonth = nextMonthAction ? (
      <div className="calNavigation" onClick={nextMonthAction}>
        {"⇨"}
      </div>
    ) : null;

    // render days
    let days = [];
    let weeks = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="dayCell" key={`blankday-${i}`}></div>);
    }
    for (let i = 1; i <= numberOfDays; i++) {
      days.push(
        <div className="dayCell" key={`day-${i}`}>
          <Day number={i} isActive={true} />
        </div>
      );
    }

    // render weeks (aggregate day cells)
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
      <div className="monthView">
        <div className="header">
          {prevMonth}
          <div className="monthName">{`${monthName} ${year}`}</div>
          {nextMonth}
        </div>
        <div className="days">{weeks}</div>
      </div>
    );
  }
}
MonthView.propTypes = {
  firstDay: PropTypes.number.isRequired, // how many white cells needed for the first week
  numberOfDays: PropTypes.number.isRequired, // how many day exist in the month
  monthName: PropTypes.string.isRequired, // name of the month
  prevMonthAction: PropTypes.func, // fn to call on prev button clicked
  nextMonthAction: PropTypes.func, // fn to call on next button clicked
};

export default MonthView;
