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
    const { month, year, defaultActive, activeDays, passiveDays } = this.props;
    const { firstDay, numberOfDays, monthName } = this.calculateMonth(
      month,
      year
    );
    const isDayActiveArr = this.calculateActiveDays(
      defaultActive,
      activeDays,
      passiveDays
    );
    this.state = { firstDay, numberOfDays, monthName, isDayActiveArr };
  }

  calculateMonth(month = 1, year = 2020) {
    let firstDay = new Date(year, month, 1).getDay();
    let numberOfDays = new Date(year, month + 1, 0).getDate();

    return {
      firstDay: firstDay,
      numberOfDays: numberOfDays,
      monthName: monthName[month]
    };
  }

  calculateActiveDays(defaultActive = true, activeList = [], passiveList = []) {
    let isDayActiveArr = new Array(32);
    isDayActiveArr.fill(defaultActive);

    if (defaultActive) {
      passiveList.forEach(day => {
        isDayActiveArr[day] = false;
      });
    } else {
      activeList.forEach(day => {
        isDayActiveArr[day] = true;
      });
    }

    return isDayActiveArr;
  }

  render() {
    const { firstDay, numberOfDays, monthName, isDayActiveArr } = this.state;
    return (
      <MonthView
        firstDay={firstDay}
        numberOfDays={numberOfDays}
        monthName={monthName}
        isDayActiveArr={isDayActiveArr}
        prevMonthAction={this.props.prevMonthAction}
        nextMonthAction={this.props.nextMonthAction}
      />
    );
  }
}

Month.propTypes = {
  month: PropTypes.number, // month as number
  year: PropTypes.number, // year as number
  defaultActive: PropTypes.bool, // whether default day status is active
  activeDays: PropTypes.array, // list of active days
  passiveDays: PropTypes.array // list of passive days
};

export default Month;
