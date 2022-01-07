import React, { useCallback, useState } from "react";

const ChildComponentWithoutProps = () => {

  console.log('ChildComponentWithoutProps is rendering')

  return (
      <div>ChildComponentWithoutProps</div>
  )
}

const ChildComponent = ( {onClick, label = "ChildComponent"} ) => {

  console.log(label + ' is rendering')

  return (
      <div onClick={onClick}>{label}</div>
  )
}

const MemoChild = React.memo(ChildComponent)

export default function Functional() {

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
        <MemoChild label="MemoChild" onClick={handleCounter}/>
        <MemoChild label="MemoChildWithCallback" onClick={handleCounterCallback}/>
      </>
  );
}
