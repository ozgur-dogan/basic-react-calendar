import React from "react";
import Calendar from "./view.js";
export default class extends React.Component {
  constructor(props) {
    super(props);

    let initialDate = props.initialDate || new Date();

    console.log(initialDate, initialDate.getMonth(), initialDate.getFullYear());

    this.state = {
      defaultActive: props.defaultActive || true,
      activeDays: this.calculateActiveDays(props),
      passiveDays: this.calculatePassiveDays(props),
      month: initialDate.getMonth(),
      year: initialDate.getFullYear()
    };
    console.log(this.state);
  }
  calculateActiveDays(props) {
    let activeDays = {};
    if (props.activeRanges) {
      props.activeRanges.forEach(range => {
        const { from, to } = range;
        let tempDate = new Date().setDate(from.getDate() + 0);

        while (tempDate <= to) {
          this.addDay(activeDays, tempDate);
          tempDate = tempDate.setDate(tempDate.getDate() + 1);
        }
      });
    }
    if (props.activeDays) {
      props.activeDays.forEach(day => {
        this.addDay(activeDays, day);
      });
    }
    return activeDays;
  }

  calculatePassiveDays(props) {
    let passiveDays = {};
    if (props.passiveRanges) {
      props.passiveRanges.forEach(range => {
        const { from, to } = range;
        let tempDate = new Date().setDate(from.getDate() + 0);

        while (tempDate <= to) {
          this.addDay(passiveDays, tempDate);
          tempDate = tempDate.setDate(tempDate.getDate() + 1);
        }
      });
    }
    if (props.passiveDays) {
      props.passiveDays.forEach(day => {
        this.addDay(passiveDays, day);
      });
    }
    return passiveDays;
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
    if (month < 1) {
      month = 12;
      year--;
    }
    this.setState({ month, year });
  }
  nextMonthAction() {
    let { month, year } = this.state;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
    this.setState({ month, year });
  }
  render() {
    return (
      <Calendar
        {...this.state}
        prevMonthAction={this.prevMonthAction.bind(this)}
        nextMonthAction={this.nextMonthAction.bind(this)}
      />
    );
  }
}
