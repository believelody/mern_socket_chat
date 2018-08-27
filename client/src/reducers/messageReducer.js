import * as types from '../constants';

export default (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      console.log("In message reducer: ", payload);
      return state.concat([
        {
          message: payload.message,
          author: payload.author,
          id: payload.id
        }
      ]);
    default:
      return state;
  }
}
