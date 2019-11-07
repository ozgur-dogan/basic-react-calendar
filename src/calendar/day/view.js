import React from 'react';
export default class extends React.Component {
  render() {
    const { number, color, isActive, onClick } = this.props;
    return <div
      className={"day " + (isActive ? "active" : "inactive")}
      onClick={() => {
        if (isActive && onClick) {
          onClick();
        }
      }}
    >
      <div className={"day-color " + color}>{number}</div>
    </div>;
  }
}
