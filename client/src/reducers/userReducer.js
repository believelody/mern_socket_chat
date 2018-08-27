import * as types from '../constants';

export default (state = [], { type, payload }) => {
  switch (type) {
    case types.USERS_LIST:
      // console.log("In user reducer users list: ", payload);
      return payload;
    case types.ADD_USER:
      console.log(payload);
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
