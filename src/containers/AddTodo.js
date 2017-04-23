/**
 * Created by khongyan on 2017/3/27.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo, updateAuthorName} from '../actions'
import { increment } from '../actions/createActions'

// 无状态函数式组件
let AddTodo = ({dispatch}) => {
  let inputList;
  let inputAuthorName;
  let inputListId;
  
  let updateName = (e) => {
    e.stopPropagation();
    dispatch(updateAuthorName({
      id: +inputListId.value.trim(),
      authorName: inputAuthorName.value.trim()
    }))
  };
  
  let updateIncrement = () => {
    dispatch(increment({
      amount: 1
    }))
  }
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!inputList.value.trim()) {
          return
        }
        dispatch(addTodo(inputList.value));
        inputList.value = ''
      }}>
        
        <p className="form-list">
          <label>text: </label>
          <input type="text" ref={node => { inputList = node }} />
        </p>
        
        <p className="form-list tr">
          <button type="submit">
            Add Todo
          </button>
          <a className="btn" onClick={ updateIncrement }>increment</a>
        </p>
        
        <p className="form-list">
          <label>list id:</label>
          <input type='number' ref={node => { inputListId = node }}/>
        </p>
        
        <p className="form-list">
          <label>auther name: </label>
          <input type="text" ref={node => { inputAuthorName = node }}/>
        </p>
        
        <p className="form-list tr">
          <a className="btn" onClick={ updateName }>
            update author name
          </a>
        </p>
        
      </form>
    </div>
  )
};
AddTodo = connect()(AddTodo); //Inject just dispatch and don't listen to store

export default AddTodo