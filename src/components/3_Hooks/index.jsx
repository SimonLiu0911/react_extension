// import React, { Component } from 'react';

// class Demo extends Component {
//   state = {
//     count: 0
//   }
//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <h1>當前數字: {count}</h1>
//         <button onClick={this.add}>click</button>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";

const Demo = () => {
  const [count, setCount] = useState(0)
  const myRef = useRef()

  const add = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
  }

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  const show = () => {
    console.log(myRef.current.value);
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>當前數字: {count}</h1>
      <input ref={myRef} />
      <button onClick={add}>click</button>
      <button onClick={unmount}>unmount</button>
      <button onClick={show}>show</button>
    </div>
  );
}

export default Demo;


