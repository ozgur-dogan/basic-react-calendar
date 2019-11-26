import React from "react";
import ReactDOM from "react-dom";
import Calendar from "basic-react-calendar";

const date = new Date();
const width = 301;
const height = 250;
const onDateSelect = date => {
  alert(date);
};

ReactDOM.render(
  <Calendar
    width={width}
    height={height}
    onDateSelect={onDateSelect}
    initialDay={date}
  />,
  document.getElementById("root")
);
