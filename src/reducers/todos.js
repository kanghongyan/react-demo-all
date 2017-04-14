/**
 * Created by khongyan on 2017/3/27.
 */

import { List, fromJS } from 'immutable'

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // return fromJS({
      //   id: action.id,
      //   text: action.text,
      //   completed: false
      // }).toObject();
      return fromJS({
          id: action.id,
          text: action.text,
          completed: false,
          info: {
            author: {
              name: 'hya',
              nick: 'kkk'
            },
            data: '2010-01-01'
          }
      });
    case 'UPDATE_AUTHOR_NAME':
      if (state.get('id') === action.id) {
        return state.setIn(['info', 'author', 'name'], action.authorName)
      }
      return state;
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      
      return Object.assign({}, state, {
        completed: !state.completed
      });
    
    default:
      return state
  }
};

const todos = (state = List(), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let iState = todo(undefined, action).toJS();
      return state.push(iState);
    case 'UPDATE_AUTHOR_NAME':
      return state.map((t) =>
        (todo(fromJS(t), action)).toObject()
      );
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos