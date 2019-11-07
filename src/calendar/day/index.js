import React from "react";
import PropTypes from "prop-types";
import DayView from "./dayView.js";
class Day extends React.Component {
  render() {
    const { number, color, isActive, onClick } = this.props;
    return (
      <DayView
        number={number}
        color={color}
        isActive={isActive}
        onClick={onClick}
      />
    );
  }
}
Day.propTypes = {
  number: PropTypes.number, // day as number
  color: PropTypes.string, // color of the text
  isActive: PropTypes.bool, // is day active
  onClick: PropTypes.func // on click action
};
export default Day;
