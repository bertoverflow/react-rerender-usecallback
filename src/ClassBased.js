import React, { useCallback, useState } from "react";

class ChildComponentWithoutProps extends React.Component {

  render() {
    console.log('ChildComponentWithoutProps is rendering')

    return <div>ChildComponentWithoutProps</div>;
  }
}

class ChildComponent extends React.Component {

  render() {
    const {onClick, label} = this.props;

    console.log(label + ' is rendering')

    return <div onClick={onClick}>{label}</div>;
  }
}

class PureChild extends React.PureComponent {

  render() {
    const {onClick, label} = this.props;

    console.log(label + ' is rendering')

    return <div onClick={onClick}>{label}</div>;
  }
}

export function ClassBasedFunctional() {

  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(prev => prev + 1);
  }

  const handleCounterCallback = useCallback(() => {
    setCounter(prev => prev + 1);
  }, [])

  return (
      <>
        <p>{counter}</p>
        <button onClick={handleCounter}>Count me up</button>
        <ChildComponentWithoutProps/>
        <ChildComponent label="ChildComponent" onClick={handleCounter}/>
        <ChildComponent label="ChildComponentWithCallBack" onClick={handleCounterCallback}/>
        <PureChild label="PureChild" onClick={handleCounter}/>
        <PureChild label="PureChildWithCallback" onClick={handleCounterCallback}/>
      </>
  );
}

export class ClassBased extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  handleCounter() {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  }

  handleCounterBound = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  }

  render() {

    return (
        <>
          <p>{this.state.counter}</p>
          <button onClick={() => this.handleCounter()}>Count me up</button>
          <ChildComponentWithoutProps/>
          <ChildComponent label="ChildComponent" onClick={() => this.handleCounter()}/>
          <ChildComponent label="ChildComponentBound" onClick={this.handleCounterBound}/>
          <PureChild label="PureChild" onClick={() => this.handleCounter()}/>
          <PureChild label="PureChildBound" onClick={this.handleCounterBound}/>
        </>
    );

  }
}
