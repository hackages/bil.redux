import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Counter = props => {
  return (
    <Fragment>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </Fragment>
  );
};

const Header = ({ counter }) => {
  return <h1>Counter {counter}</h1>;
};

class App extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <Fragment>
        <Header counter={this.state.counter} />
        <Counter increment={this.increment} decrement={this.decrement} />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
