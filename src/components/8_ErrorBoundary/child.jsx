import React, { Component } from 'react';

class Child extends Component {
  state = {
    users: [
      { id: 1, name: 'Tom', age: 18 },
      { id: 2, name: 'May', age: 19 },
      { id: 3, name: 'Bom', age: 20 }
    ]
  }
  render() {
    const { users } = this.state
    return (
      <ul>
        {
          users.map((user) => {
            // 故意寫錯
            return <li>{user}</li>
          })
        }
      </ul>
    );
  }
}

export default Child;
