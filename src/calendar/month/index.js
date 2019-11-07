import React from "react";
import View from "./view.js";
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: props.month, year: props.year };
  }

  calculateMonth(month, year) {
    if (month === undefined || year === undefined) return null;
    let firstDay = new Date(year, month - 1, 1).getDay();
    let numberOfDays = new Date(year, month, 0).getDate();
    let firstActiveDay = 0;

    let currentDate = new Date();
    if (currentDate.getFullYear() > year) {
      firstActiveDay = numberOfDays + 1;
    } else if (currentDate.getMonth() + 1 > month) {
      firstActiveDay = numberOfDays + 1;
    } else if (
      currentDate.getFullYear() === year &&
      currentDate.getMonth() + 1 === month
    ) {
      firstActiveDay = currentDate.getDate();
    }
    console.log({ month, year, numberOfDays, firstDay });
    return {
      firstDay: firstDay,
      numberOfDays: numberOfDays,
      monthName: monthName[month - 1],
      firstActiveDay: firstActiveDay
    };
  }

  prevMonthAction(){
      let {month,year} = this.state;
      month--;
      if(month < 1){
        month = 12;
        year--;
      }
      this.setState({month,year});
  }
  nextMonthAction(){
    let {month,year} = this.state;
      month++;
      if(month > 12){
        month = 1;
        year++;
      }
      this.setState({month,year});
}

  render() {
    const { month, year } = this.state;
    let currentMonthProps = this.calculateMonth(month, year);
    if (currentMonthProps === null) {
      return null;
    }
    return (
      <View
        {...this.calculateMonth(month, year)}
        prevMonthAction={this.prevMonthAction.bind(this)}
        nextMonthAction={this.nextMonthAction.bind(this)}
      />
    );
  }
}
export default Month;
