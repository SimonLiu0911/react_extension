import React, { Component, PureComponent } from 'react';

export default class Demo extends PureComponent {
  state = {
    carName: 'Benz'
  }

  // PureComponent會做淺拷貝比對
  changeCar = () => {
    // this.setState({ carName: 'BMW' })

    const obj = this.state
    obj.carName = 'Benz'
    this.setState(obj)  // 對PureComponent來說是同一個obj，因此不會觸發更新
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState.carName);
  //   console.log(this.state.carName);
  //   return !(this.state.carName === nextState.carName)
  // }
  render() {
    const { carName } = this.state
    console.log('Parent --- render');
    return (
      <div>
        <h3>I am Parent Component</h3>
        <p>My car is {carName}</p>
        <button onClick={this.changeCar}>Click to change Car</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !this.props.carName === nextProps
  // }
  render() {
    const { carName } = this.props
    console.log('Child --- render');
    return (
      <div>
        <h3>I am ParChildent Component</h3>
        <p>My car is {carName}</p>
      </div>
    );
  }
}
