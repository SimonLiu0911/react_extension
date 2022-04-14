import React, { Component } from "react";

export default class renderProps extends Component {
  render() {
    return (
      <div>
        <h3>i am parent component</h3>
        <A render={(name) => <B name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = {
    name: "Tom",
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h3> i am A component </h3>
        {this.props.render(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this.props);
    const { name } = this.props;
    return <div>i am B component: {name}</div>;
  }
}
