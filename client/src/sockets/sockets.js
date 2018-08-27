import * as types from '../constants';
import { addUser, receivedMessage, usersList } from '../actions/chatAction';

export default (dispatch, name) => {
  const socket = new WebSocket('ws://localhost:8989');
  // console.log('username: ', name);

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name
    }))
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case types.USERS_LIST:
        dispatch(usersList(data.payload));
        break;
      case types.ADD_USER:
        // console.log("in add user");
        dispatch(addUser(data.name));
        break;
      case types.ADD_MESSAGE:
        // console.log("On socket add message: ",data.payload);
        dispatch(receivedMessage(data.payload));
        break;
      default:
        break;
    }
  }

  return socket;
}
