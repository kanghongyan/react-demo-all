import React, { PropTypes } from 'react'

// We recommend naming props from the component's own point of view rather than the context in which it is being used.

// All React components must act like pure functions with respect to their props.

// 顺序如下：
// 1.发现 <Clock /> constructor
// 2. render
// 3. componentDidMount
// 4. <Clock /> 从当前dom移除 componentWillUnMount

class Clock extends React.Component {
  constructor(props) {
    super(props); // Class components should always call the base constructor with props.
    
    // 只能在constructor中用这种方式为state赋值
    this.state = {date: new Date()}; // 需要渲染在render中的数据用state保存，其他的放在this下就可以了
  }
  
  // lifeCircle
  
  componentDidMount() {
    // whenever the Clock is rendered to the DOM for the first time
    
    // The componentDidMount() hook runs after the component output has been rendered to the DOM
    
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    // whenever the DOM produced by the Clock is removed
  
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
    
    
    // 1.State Updates May Be Asynchronous
    // Wrong
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // Correct
    // this.setState((prevState, props) => ({
    //   counter: prevState.counter + props.increment
    // }));
    
    // 2.State Updates are Merged
    // this.state = {a: '', b: ''}
    // this.setState({a: xxx})
    // this.setState({b: xxx})
    // a、b不相互影响
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}