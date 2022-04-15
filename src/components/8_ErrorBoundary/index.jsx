import React, { Component } from 'react';
import Child from './child'

export default class ErrorBoundary extends Component {
  state = {
    hasError: '' // 用於標示子組件是吼產生錯誤
  }
  // 當Parent的子組件出現報錯的時候，會觸發getDerivedStateFromError調用，並攜帶錯誤信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: error }
  }

  componentDidCatch(error, info) {
    console.log('渲染組件時出錯');
    console.log('error', error);
    console.log('info', info);
  }
  render() {
    return (
      <div>
        ErrorBoundary
        {this.state.hasError ? <h2>子組件發生錯誤</h2> : <Child />}
      </div>
    );
  }
}
