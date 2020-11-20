import { FETCH_USER_SUCCESS } from "../actions/userActions";

const INITIAL_USER = {
  userType: null,
  token: null
};

export const userTypeReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userType: action.userType,
        token: action.token
      };
    default:
      return state;
  }
};
