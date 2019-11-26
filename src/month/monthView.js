import React from "react";
import PropTypes from "prop-types";
import Day from "../day";
import styles from "./monthView.css";
class MonthView extends React.Component {
  static propTypes = {
    firstDay: PropTypes.number.isRequired, // how many white cells needed for the first week
    numberOfDays: PropTypes.number.isRequired, // how many day exist in the month
    monthName: PropTypes.string.isRequired, // name of the month
    onClick : PropTypes.func // on day click action
  };
  render() {
    const { firstDay, numberOfDays, monthName, year } = this.props;
    // render days
    let days = [];
    let weeks = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className={styles.dayCell} key={`blankday-${i}`}></div>);
    }
    for (let i = 1; i <= numberOfDays; i++) {
      days.push(
        <div className={styles.dayCell} key={`day-${i}`}>
          <Day number={i} isActive={true} onClick={this.props.onClick}/>
        </div>
      );
    }

    // render weeks (aggregate day cells)
    let weekNumber = 0;
    while (weekNumber < 6) {
      weeks.push(
        <div className={styles.week} key={`week-${++weekNumber}`}>
          {days.splice(0, 7)}
        </div>
      );
    }

    // render
    return (
      <div className={styles.monthView}>
        <div className={styles.header}>
          <div className={styles.monthName}>{`${monthName} ${year}`}</div>
        </div>
        <div className={styles.days}>{weeks}</div>
      </div>
    );
  }
}
export default MonthView;
