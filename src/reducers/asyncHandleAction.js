import {handleActions} from 'redux-actions'

// first param: handleAction
// second param: init state
const reducer = handleActions({
  FETCH_THING: (state, action) => {
    console.log(action);
    return []
  }
}, []);

export default reducer