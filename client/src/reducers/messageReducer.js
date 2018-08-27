import * as types from '../constants';

export default (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_MESSAGE:
      return [
        ...state,
        {
          message: payload.message,
          author: payload.author,
          id: payload.id
        }
      ];
    case types.MESSAGE_RECEIVED:
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
