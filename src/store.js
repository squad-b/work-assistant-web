import {createStore} from 'redux';

export default createStore(function (state, action) {
  if (state === undefined) {
    const rentalDate = new Date().toDateString();
    return {
      currentUser: undefined,
      users : [
        {
          name: '채윤병',
          email: 'yunbchae',
          password: 'yunbchae',
          bookList: [
            {id: 1, title: 'title 1', rentalDate: rentalDate},
            {id: 2, title: 'title 2', rentalDate: rentalDate},
            {id: 3, title: 'title 3', rentalDate: rentalDate}
          ]
        },
        {
          name: '오민호',
          email: 'mhoh',
          password: 'mhoh',
          bookList: [
            {id: 1, title: 'title 1', rentalDate: rentalDate},
            {id: 2, title: 'title 2', rentalDate: rentalDate}
          ]
        },
        {
          name: '유인근',
          email: 'keun0390',
          password: 'keun0390',
          bookList: [
            {id: 1, title: 'title 1', rentalDate: rentalDate}
          ]
        }
      ]
    }
  }

  if (action.type === 'LOGIN') {
    let _currentUser;
    let i = 0;
    while(i < state.users.length) {
      const user = state.users[i];
      if (user.email === action.email) {
        if (user.password !== action.password) {
          alert('땡');
          break;
        }
        _currentUser = user;
        break;
      }
      i++;
    }
    return {...state, currentUser: _currentUser}
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())