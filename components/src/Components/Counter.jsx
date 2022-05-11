import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // initialize
    // state managemnet
    this.state = {
      counter: 0,
    };
  }
  handleUpdate = (value) => {
    // this.setState({
    //   counter: this.state.counter + value,
    // });
    // another way
    // this.setState((pre) => {
    //   return {
    //     counter: pre.counter + value,
    //   };
    // });
  };
  render() {
    const { title } = this.props;
    const { counter } = this.state;

    return (
      <>
        <h1>{title}</h1>
        <h2>{counter}</h2>
        <button
          onClick={() => {
            this.handleUpdate(1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleUpdate(-1);
          }}
        >
          -
        </button>
      </>
    );
  }
}

export { Counter };
