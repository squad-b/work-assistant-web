import {createStore} from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return {
      memberId: JSON.parse(localStorage.getItem('memberId')),
      memberType: JSON.parse(localStorage.getItem('memberType'))
    }
  }

  if (action.type === 'AUTHENTICATION') {
    if (action.memberId && action.memberType) {
      localStorage.setItem('memberId', JSON.stringify(action.memberId));
      localStorage.setItem('memberType', JSON.stringify(action.memberType));
    } else {
      localStorage.clear()
    }
    return {...state, memberId: action.memberId, memberType: action.memberType}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())