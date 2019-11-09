import React from "react";
import PropTypes from "prop-types";
import Month from "./month";
import "./calendarView.scss";
class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: 0 };
  }
  componentDidUpdate(prevProps){
    const currentDate = this.props.date.getTime();
    if(prevProps.date.getTime() === currentDate){
      return;
    }
    this.setState({
      prevMonthAnimation: false,
      nextMonthAnimation: false,
      isLocked: false,
      left:0
    })
  }
  prevMonthAction() {
    const { isLocked } = this.state;
    const { date } = this.props;
    if (isLocked) {
      return;
    }
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year, month - 1, 1);

    const t = this;
    this.setState({
      prevMonthAnimation: true,
      nextMonthAnimation: false,
      isLocked: true,
      left: 0
    });
    let counter = 100;
    let thisInterval = setInterval(() => {
      counter -= 2;
      if (counter > 0) {
        t.setState({ left: (100 - counter) * -1});
      } else {
        clearInterval(thisInterval);
        t.props.setDate(newDate);
      }
    }, 16);
  }
  nextMonthAction() {
    const { isLocked } = this.state;
    const { date } = this.props;
    if (isLocked) {
      return;
    }
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year, month + 1, 1);

    const t = this;
    this.setState({
      prevMonthAnimation: false,
      nextMonthAnimation: true,
      isLocked: true,
      left: 0
    });
    let counter = 100;
    let thisInterval = setInterval(() => {
      counter -= 2;
      if (counter > 0) {
        t.setState({ left: 100 - counter });
      } else {
        clearInterval(thisInterval);
        t.props.setDate(newDate);
      }
    }, 16);
  }

  renderPrevMonth() {
    const { date } = this.props;
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year, month - 1, 1);
    return (
      <div className="prevMonth">
        <Month key={"prevMonth"} date={newDate} />
      </div>
    );
  }
  renderNextMonth() {
    const { date } = this.props;
    let year = date.getFullYear();
    let month = date.getMonth();
    let newDate = new Date(year, month + 1, 1);
    return (
      <div className="nextMonth">
        <Month key={"nextMonth"} date={newDate} />
      </div>
    );
  }
  render() {
    const { date } = this.props;
    const { nextMonthAnimation, prevMonthAnimation, left,  isLocked } = this.state;
    return (
      <div className="calendarView">
        {prevMonthAnimation && this.renderPrevMonth()}
        {nextMonthAnimation && this.renderNextMonth()}
        <div className="currentMonth" style={{ left: left + "%" }}>
          <Month
            key={date}
            date={date}
            prevMonthAction={!isLocked ? this.prevMonthAction.bind(this) : undefined}
            nextMonthAction={!isLocked ? this.nextMonthAction.bind(this) : undefined}
          />
        </div>
      </div>
    );
  }
}
CalendarView.propTypes = {
  date: PropTypes.instanceOf(Date), // date
  setDate: PropTypes.func // setDate
};
export default CalendarView;
