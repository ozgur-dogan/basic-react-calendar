import React from "react";
import PropTypes from "prop-types";
import './dayView.scss';

const defaultColor = "default";
class DayView extends React.Component {
  render() {
    const { number, color, isActive, onClick } = this.props;
    const className = isActive ? "dayView active" : "dayView passive";
    return (
      <div className={className} onClick={onClick}>
        <div className={"day-color "} style={{ color: color || defaultColor }}>
          {number}
        </div>
      </div>
    );
  }
}

DayView.propTypes = {
  number: PropTypes.number, // day as number
  color: PropTypes.string, // color of the text
  isActive: PropTypes.bool, // is day active
  onClick: PropTypes.func // on click action
};

export default DayView;
