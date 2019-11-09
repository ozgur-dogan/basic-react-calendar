import React from "react";
import PropTypes from "prop-types";
import MonthView from "./monthView.js";
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Month extends React.Component {
  constructor(props) {
    super(props);
    const { firstDay, numberOfDays, monthName, year } = this.calculateMonth(props.date);
    this.state = { firstDay, numberOfDays, monthName, year};
  }

  calculateMonth(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    let numberOfDays = new Date(year, month + 1, 0).getDate();

    return {
      firstDay: firstDay,
      numberOfDays: numberOfDays,
      monthName: monthName[month],
      year : year
    };
  }

  render() {
    const { firstDay, numberOfDays, monthName,year} = this.state;
    return (
      <MonthView
        firstDay={firstDay}
        numberOfDays={numberOfDays}
        monthName={monthName}
        year={year}
        prevMonthAction={this.props.prevMonthAction}
        nextMonthAction={this.props.nextMonthAction}
      />
    );
  }
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date), // month as number
  activeDays: PropTypes.array, // list of active days
  passiveDays: PropTypes.array // list of passive days
};

export default Month;
