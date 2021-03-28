import {createStore} from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { memberId: JSON.parse(localStorage.getItem('memberId')) }
  }

  if (action.type === 'AUTHENTICATION') {
    if (action.memberId) {
      localStorage.setItem('memberId', JSON.stringify(action.memberId));
    } else {
      localStorage.removeItem('memberId');
    }
    return {...state, memberId: action.memberId}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())