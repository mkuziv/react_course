import React, { Component } from 'react';
import CounterButton from './CounterButton/CounterButton';

import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {

    return (
      <section className="counter">
        Current count: {this.state.count}
        <br />
        <CounterButton sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <CounterButton sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </section >
    );
  }
}

export default Counter;
