import React from 'react';
import './Counter.css';
import Controls from './Controls';
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div className="Counter__container">
        <div className="Counter">
          <h2>(Counter)</h2>
          <span className="Counter__value">{this.state.value}</span>
          <Controls
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
