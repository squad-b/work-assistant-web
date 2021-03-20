import {createStore} from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    // TODO: 윤병, 로그인 상태 확인 API 요청
    return { isLogin: false }
  }

  if (action.type === 'LOGIN') {
    return {...state, isLogin: action.isLogin}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())