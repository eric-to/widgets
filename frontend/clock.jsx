import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return(
      <div>
        <h1>This is a REALLY nice clock because Julian and Eric made it.</h1>
        <h2>Time: {this.formatTime(this.state.date)}</h2>
        <h2>Date: {this.state.date.toDateString()}</h2>
      </div>
    );
  }

  formatTime(date) {
    const hours = date.getHours() % 12;
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  } 
}