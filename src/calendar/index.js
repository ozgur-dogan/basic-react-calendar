import React from "react";
import PropTypes from "prop-types";
import CalendarView from "./calendarView.js";
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const {
      initialDate
    } = props;

    let date = initialDate || new Date();
    this.state = {
      date: date
    };
  }
  prevMonthAction() {
    let { date } = this.state;
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year,month-1,1);
    this.setState({ date: newDate });
  }
  nextMonthAction() {
    let { date } = this.state;
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year,month+1,1);
    this.setState({ date: newDate });
  }
  setDate(date){
    this.setState({date:date});
  }
  render() {
    const { date } = this.state;
    return (
      <CalendarView
        setDate = {this.setDate.bind(this)}
        date={date}
      />
    );
  }
}

Calendar.propTypes = {
  initialDate: PropTypes.instanceOf(Date)
};

export default Calendar;
