import React, { Component } from 'react';
import { NavLink, Router, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'


class Demo extends Component {
  render() {
    return (
      <>
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/home">Home</NavLink>
        </div>
        <div>
          <Router>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        </div>
      </>
    );
  }
}

export default Demo;
