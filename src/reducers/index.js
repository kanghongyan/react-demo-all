/**
 * Created by khongyan on 2017/3/27.
 */
import { combineReducers } from 'redux';

// 在各个reducer里定义各自的初始state
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos, // []
  visibilityFilter // string
});

export default todoApp