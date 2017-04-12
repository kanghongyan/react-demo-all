import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class test extends Component {
  componentWillMount() {
    console.log('test');
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
      </div>
    );
  }
}

export default test;