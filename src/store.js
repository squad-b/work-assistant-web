import {createStore} from 'redux';
import Member from "./domain/member/Member";
import api from "./api";

export default createStore((state, action) => {
  if (state === undefined) {
    const _currentUser = null;
    // TODO: 윤병, GET /profile API 만들고 주석 제거
    // const response = await api.get('/profile');
    // const _currentUser = (response.data.result === "LOGIN_REQUIRED") ? null : new Member(response.data.member);
    // return { currentUser: _currentUser }
    return { currentUser: _currentUser }
  }

  if (action.type === 'LOGIN') {
    return {...state, currentUser: new Member(action.member)}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())