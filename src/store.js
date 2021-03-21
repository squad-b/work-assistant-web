import {createStore} from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { isLogin: JSON.parse(localStorage.getItem('isLogin')) }
  }

  if (action.type === 'AUTHENTICATION') {
    localStorage.setItem('isLogin', JSON.stringify(action.isLogin));
    return {...state, isLogin: action.isLogin}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())