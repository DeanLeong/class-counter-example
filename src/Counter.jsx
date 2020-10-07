import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
    };
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
