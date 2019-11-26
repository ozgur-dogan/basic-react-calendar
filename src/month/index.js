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
  static propTypes = {
    initialDate: PropTypes.instanceOf(Date)
  };
  constructor(props) {
    super(props);
    const { firstDay, numberOfDays, monthName, year } = this.calculateMonth(
      props.date
    );
    this.state = { firstDay, numberOfDays, monthName, year };
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
      year: year
    };
  }

  onClick(day) {
    let date = this.props.date.getTime();
    let selectedDate = new Date(date);
    selectedDate.setDate(day);
    selectedDate.setHours(0);
    selectedDate.setMinutes(0);
    selectedDate.setSeconds(0);
    selectedDate.setMilliseconds(1);
    this.props.onClick(selectedDate);
  }

  render() {
    const { firstDay, numberOfDays, monthName, year } = this.state;
    return (
      <MonthView
        firstDay={firstDay}
        numberOfDays={numberOfDays}
        monthName={monthName}
        year={year}
        onClick={this.onClick.bind(this)}
      />
    );
  }
}

export default Month;
