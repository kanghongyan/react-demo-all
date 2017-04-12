/**
 * Created by khongyan on 2017/3/27.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

// 无状态函数式组件
// 组件不能访问this对象
let AddTodo = ({dispatch}) => {
  let input;
  
  console.log(this)
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};
AddTodo = connect()(AddTodo); //Inject just dispatch and don't listen to store

export default AddTodo