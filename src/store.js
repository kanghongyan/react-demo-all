import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
// import { createLogger } from 'redux-logger'
import appReducers from './reducers/index';
import { Map, List, fromJS } from 'immutable'

// store obj
// store has some api: { dispatch(func), getState(func), replaceReducer(func), subscribe(func) }
const initialState = Map({
  todos: List([fromJS(
    {
      id: -1,
      text: 'text',
      completed: false,
      info: {
        author: {
          name: 'hya',
          nick: 'kkk'
        },
        data: '2010-01-01'
      }
    }
  )]),
  amount: 1
});
// let store = createStore(
//   appReducers,
//   initialState
// );

// const loggerMiddleware = createLogger()

// createStore(reducer, [preloadedState], enhancer)
const store = compose(applyMiddleware(thunkMiddleware, promiseMiddleware))(createStore)(appReducers, initialState);

// const store = createStore(
//   appReducers,
//   Map(),
//   applyMiddleware(
//     thunkMiddleware, // 允许我们 dispatch() 函数
//     loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
//   )
// );

// console.log(store.getState());
// console.log(store.getState().get('visibilityFilter')); // {todos: [], visibilityFilter: 'showAll'}

export default store