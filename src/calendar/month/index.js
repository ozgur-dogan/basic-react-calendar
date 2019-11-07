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
    this.state = this.calculateMonth(props);
    this.state = Object.assign(this.state,this.calculateActiveDays(props,this.state));
  }

  calculateMonth(props) {
    if (props === undefined || props.month === undefined || props.year === undefined){ return null};
    let firstDay = new Date(props.year, props.month, 1).getDay();
    let numberOfDays = new Date(props.year, props.month+1, 0).getDate();

    return {
      firstDay: firstDay,
      numberOfDays: numberOfDays,
      monthName: monthName[props.month]
    };
  }

  calculateActiveDays(props,state){
    let activeDays = new Array(state.numberOfDays+1);
    activeDays.fill(props.defaultActive);
    
    if(props.defaultActive && props.passiveDays !== undefined){
      props.passiveDays.forEach(day=>{
        activeDays[day] = false;
      });
    }

  if(!props.defaultActive && props.activeDays !== undefined){
      props.activeDays.forEach(day=>{
        activeDays[day] = true;
      })
    }


    return {activeDays};
  }
  render() {
    return (
      <View
        {...this.state}
        prevMonthAction={this.props.prevMonthAction}
        nextMonthAction={this.props.nextMonthAction}
      />
    );
  }
}
export default Month;
