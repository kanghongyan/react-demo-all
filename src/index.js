import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router} from 'react-router'; //import { hashHistory } from 'react-router
import createHistory from 'history/lib/createHashHistory'; //用history替代react-router的hashHistory
import { Map } from 'immutable'

import './index.scss';
import routeConfig from './router';
import appReducers from './reducers/index';

// store obj
const initialState = Map();
let store = createStore(appReducers, initialState); // { dispatch(func), getState(func), replaceReducer(func), subscribe(func) }

console.log(store.getState());
console.log(store.getState().get('visibilityFilter')); // {todos: [], visibilityFilter: 'showAll'}

/*const routes = (
 <Route path="/" component={App}>
 
 </Route>
 );*/
/*const routes = {
 path: '/',
 component: App
 }*/

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routeConfig } history={ createHistory() }/>
  </Provider>,
  document.getElementById('root')
);
