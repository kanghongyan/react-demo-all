import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router} from 'react-router'; //import { hashHistory } from 'react-router
import createHistory from 'history/lib/createHashHistory'; //用history替代react-router的hashHistory

import store from './store'
import './index.scss';
import routeConfig from './router';

import './util/CONFIG'

// test
// import { fetchPosts } from './actions/sync'
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// )
// test end
import { fetchThing } from './actions/createActions';
store.dispatch(fetchThing('http://www.subreddit.com/r/reactjs.json'))




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
