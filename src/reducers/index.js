/**
 * Created by khongyan on 2017/3/27.
 */
// import { combineReducers } from 'redux';
// use redux-immutable
import { combineReducers } from 'redux-immutable'

// 引入各个reducer函数, 在各个reducer里定义各自的初始state
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// todoApp 为 func
const todoApp = combineReducers({
  todos, // []
  visibilityFilter // string
});

export default todoApp