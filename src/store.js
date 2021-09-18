import {createStore} from 'redux';

export default createStore((state, action) => {
    let memberId;
    let memberType;
    let isAdmin;

    if (state === undefined) {
      memberId = JSON.parse(localStorage.getItem('memberId'));
      memberType = JSON.parse(localStorage.getItem('memberType'));
      isAdmin = memberId && memberType === 'ADMIN';

      return {
        memberId: memberId,
        memberType: memberType,
        isAdmin: isAdmin,
      };
    }

    if (action.type !== 'AUTHENTICATION') {
      return state;
    }

    memberId = action.memberId;
    memberType = action.memberType;
    isAdmin = memberId && memberType === 'ADMIN';

    if (memberId && memberType) {
      localStorage.setItem('memberId', JSON.stringify(memberId));
      localStorage.setItem('memberType', JSON.stringify(memberType));
    } else {
      localStorage.clear();
    }

    return {
      ...state,
      memberId: memberId,
      memberType: memberType,
      isAdmin: isAdmin,
    };
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());