import React from "react";
import PropTypes from "prop-types";
import DayView from "./dayView.js";
class Day extends React.Component {
  static propTypes = {
    number: PropTypes.number, // day as number
    onClick: PropTypes.func // on click action
  };
  onClick() {
    this.props.onClick(this.props.number);
  }
  render() {
    const { number, color, isActive } = this.props;
    return (
      <DayView
        number={number}
        color={color}
        isActive={isActive}
        onClick={this.onClick.bind(this)}
      />
    );
  }
}
export default Day;
