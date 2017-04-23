/**
 * Created by khongyan on 2017/3/27.
 */
// import { combineReducers } from 'redux';
// use redux-immutable
import { combineReducers } from 'redux-immutable'

// todo: use import { handleActions } from 'redux-actions'

// 引入各个reducer函数, 在各个reducer里定义各自的初始state
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import handleActions from './handleActions'
import serverData from './asyncHandleAction'

// todoApp 为 func
const todoApp = combineReducers({
  todos, // []
  visibilityFilter, // string
  amount: handleActions,
  serverData: serverData
});

export default todoApp