import { FETCH_USERS, ADD_NEW_USER } from './actionTypes';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
  fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};

export const addUser = (userData) => dispatch => {
  axios.post('http://localhost:3000/addUser', {
    name: userData.name,
    age: userData.age,
    sex: userData.gender
  })
    .then(userAdded =>
      dispatch({
        type: ADD_NEW_USER,
        payload: userAdded
      })
    );
};