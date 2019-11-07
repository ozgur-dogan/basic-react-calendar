import React from "react";
import PropTypes from "prop-types";
import CalendarView from "./calendarView.js";
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const {
      initialDate,
      defaultActive,
      activeDays,
      activeRanges,
      passiveDays,
      passiveRanges
    } = props;

    let date = initialDate || new Date();

    this.state = {
      defaultActive: defaultActive || true,
      activeDays: this.aggregateDays(activeDays, activeRanges),
      passiveDays: this.aggregateDays(passiveDays, passiveRanges),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }
  aggregateDays(days = [], ranges = []) {
    let map = new Map();
    ranges.forEach(range => {
      const { from, to } = range;
      let tempDate = new Date().setDate(from.getDate() + 0);
      while (tempDate <= to) {
        this.addDay(map, tempDate);
        tempDate = tempDate.setDate(tempDate.getDate() + 1);
      }
    });
    days.forEach(day => {
      this.addDay(map, day);
    });
    return map;
  }

  addDay(map, date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    if (map[year] === undefined) {
      map[year] = {};
    }
    if (map[year][month] === undefined) {
      map[year][month] = [];
    }
    map[year][month].push(day);
  }
  prevMonthAction() {
    let { month, year } = this.state;
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    this.setState({ month: month, year: year });
  }
  nextMonthAction() {
    let { month, year } = this.state;
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    this.setState({ month: month, year: year });
  }
  render() {
    const { defaultActive, activeDays, passiveDays, month, year } = this.state;
    return (
      <CalendarView
        defaultActive={defaultActive}
        activeDays={activeDays}
        passiveDays={passiveDays}
        month={month}
        year={year}
        prevMonthAction={this.prevMonthAction.bind(this)}
        nextMonthAction={this.nextMonthAction.bind(this)}
      />
    );
  }
}

Calendar.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  defaultActive: PropTypes.bool,
  activeDays: PropTypes.array,
  activeRanges: PropTypes.array,
  passiveDays: PropTypes.array,
  passiveRanges: PropTypes.array
};

export default Calendar;
