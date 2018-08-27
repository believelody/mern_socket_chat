import * as types from '../constants';

export default (state = [], { type, payload }) => {
  switch (type) {
    case types.USERS_LIST:
      return payload.users;
    case types.ADD_USER:
      return state.concat([
        {
          name: payload.name,
          id: payload.id
        }
      ]);
    default:
      return state;
  }
}
