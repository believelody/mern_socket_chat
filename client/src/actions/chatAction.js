import * as types from '../constants';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => dispatch => dispatch({
  type: types.ADD_MESSAGE,
  payload: {
    id: nextMessageId++,
    message,
    author
  }
});

export const addUser = name => dispatch => dispatch({
  type: types.ADD_USER,
  payload: {
    id: nextUserId++,
    name
  }
});

export const receivedMessage = ({message, author}) => dispatch => dispatch({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id: nextMessageId++,
    message,
    author
  }
});

export const usersList = users => dispatch =>
dispatch({
  type: types.USERS_LIST,
  payload: users
});
