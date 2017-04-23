import { createActions } from 'redux-actions'

import store from '../store'
import api from '../api'

const { increment, fetchThing, fetchResOk, fetchResOther } = createActions({
  INCREMENT: (amount) => {
    return amount
  },
  FETCH_THING: (url) => {
    return api.getThing(url)
      .then(function (res) {
        // console.log(data);
        if (res.kind === 'Listing') {
          store.dispatch(fetchResOk('ok'));
        }
        if (res.kind === 'other') {
          store.dispatch(fetchResOther('other'));
        }
        
        return Promise.resolve(res.data)
      })
  },
  FETCH_RES_OK: (data) => {
    console.log(data)
  },
  FETCH_RES_OTHER: (data) => {
    console.log(data)
  }
});

export {
  increment,
  fetchThing
}