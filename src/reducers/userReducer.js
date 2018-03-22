import { FETCH_USERS, ADD_NEW_USER } from '../actions/actionTypes';

const initialState = {
  users: [],
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_NEW_USER:
    return {
      ...state,
      user: action.payload
    };
    default:
     return state;
  }
};

