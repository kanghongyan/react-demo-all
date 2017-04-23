import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import IncrementLabel from '../containers/IncrementLabel'

class test extends Component {
  componentWillMount() {
    console.log('will mount test');
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          this is test in page1
        </p>
        <p>redux test</p>
        <h5>=====add todolist:=====</h5>
        <AddTodo/>
        <h5>=====result todolist:=====</h5>
        <VisibleTodoList/>
        <h5>=====increment:=====</h5>
        <IncrementLabel/>
      </div>
    );
  }
}

export default test;