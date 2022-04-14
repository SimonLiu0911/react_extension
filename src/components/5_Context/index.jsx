import React, { Component } from 'react';

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class Demo extends Component {
  state = {
    username: 'Tom',
    age: 18
  }
  render() {
    const { username, age } = this.state
    return (
      <div>
        <h1>我是A組件</h1>
        <h1>我的用戶名是：{username}</h1>
        <hr />
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h3>我是B組件</h3>
        {/* <h2>A的用戶名是：{this.props.username}</h2> */}
        <hr />
        <C />
      </div>
    );
  }
}


// 類式組件
// class C extends Component {
//   static contextType = MyContext
//   render() {
//     const { username, age } = this.context
//     return (
//       <div>
//         <h5>我是C組件</h5>
//         <h5>A的用戶名是：{username} -- {age}</h5>
//       </div>
//     );
//   }
// }

// 函式組件(要用Consumer)
function C() {
  return (
    <div>
      <h5>我是C組件</h5>
      <h5>A的用戶名是：
        <Consumer>
          {
            value => {
              return `${value.username} -- ${value.age}`
            }
          }
        </Consumer>
      </h5>
    </div>
  )
}