import React, { Component } from 'react';

class Demo extends Component {
  state = {
    count: 0
  }
  add = () => {
    /**
     * 對象式的setState
     */
    // const { count } = this.state
    // // setState的第二個參數為回調，在狀態更新完畢，介面(render)也更新後才被調用
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state.count);
    // })

    /**
     * 函數式的setState
     */
    this.setState((state, props) => {
      return {count: state.count + 1}
    })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>當前數字: {count}</h1>
        <button onClick={this.add}>click</button>
      </div>
    );
  }
}

export default Demo;
