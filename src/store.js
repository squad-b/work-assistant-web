import {createStore} from 'redux';

export default createStore(function (state, action) {
  if (state === undefined) {
    const rentalDate = new Date().toDateString();
    return {
      user: {
        profile: {
          name: '채윤병',
          email: 'yunbchae@miridih.com'
        },
        bookList: [
          {id: 1, title: 'title 1', rentalDate: rentalDate},
          {id: 2, title: 'title 2', rentalDate: rentalDate},
          {id: 3, title: 'title 3', rentalDate: rentalDate}
        ]
      }
    }
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())