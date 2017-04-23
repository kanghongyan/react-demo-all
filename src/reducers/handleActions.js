import {handleActions} from 'redux-actions'

// first param: handleAction
// sec param: init state
const reducer = handleActions({
  INCREMENT: (state, action) => {
    console.log(action);
    return state + action.payload.amount
  }
}, 0);

export default reducer