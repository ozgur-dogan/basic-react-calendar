import React from "react";
import PropTypes from "prop-types";
import styles from "./dayView.css";

class DayView extends React.Component {
  static propTypes = {
    number: PropTypes.number, // day as number
    onClick: PropTypes.func // on click action
  };
  render() {
    const { number } = this.props;
    return (
      <div className={styles.dayView} onClick={this.props.onClick}>
        {number}
      </div>
    );
  }
}

export default DayView;
