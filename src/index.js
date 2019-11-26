import React from "react";
import PropTypes from "prop-types";
import AsyncCarousel from "async-carousel";
import Month from "./month";
class Calendar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    onDateSelect: PropTypes.func.isRequired,
    initialDate: PropTypes.instanceOf(Date)
  };
  constructor(props) {
    super(props);
    this.state = {
      date: props.initialDate || new Date()
    };
  }
  getMonth(index) {
    const { date } = this.state;
    if (!date) {
      return null;
    }
    let newDate = new Date(date);
    newDate.setMonth(date.getMonth() + index);
    console.log({ index, newDate });
    return (
      <Month key={index} date={newDate} onClick={this.onClick.bind(this)} />
    );
  }
  onClick(selectedDate) {
    this.props.onDateSelect(selectedDate);
  }
  render() {
    const { width, height } = this.props;
    return (
      <AsyncCarousel
        getContent={this.getMonth.bind(this)}
        width={width}
        height={height}
      />
    );
  }
}

export default Calendar;
