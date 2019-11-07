import React from "react";
import PropTypes from "prop-types";
import Month from "./month";

class CalendarView extends React.Component {
  getActivePassiveMonth(map, year, month) {
    if (map[year] === undefined || map[year][month] === undefined) {
      return [];
    } else {
      return map[year][month];
    }
  }
  render() {
    const {
      activeDays,
      passiveDays,
      year,
      month,
      prevMonthAction,
      nextMonthAction
    } = this.props;
    return (
      <div className="calendarView">
        <Month
          key={`month-${year}-${month}`}
          year={year}
          month={month}
          activeDays={this.getActivePassiveMonth(activeDays, year, month)}
          passiveDays={this.getActivePassiveMonth(passiveDays, year, month)}
          prevMonthAction={prevMonthAction}
          nextMonthAction={nextMonthAction}
        />
      </div>
    );
  }
}

CalendarView.propTypes = {
  defaultActive: PropTypes.bool, // is default status of day active
  activeDays: PropTypes.instanceOf(Map), // arr of active days
  passiveDays: PropTypes.instanceOf(Map), // arr of passive days
  month: PropTypes.number, // month in number
  year: PropTypes.number, // yearn in number
  prevMonthAction: PropTypes.func, // when press prev month button
  nextMonthAction: PropTypes.func // when press prev month button
};
export default CalendarView;
