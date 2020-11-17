import { FETCH_USER_SUCCESS } from "../actions/userActions";

const INITIAL_USER = {
  userType: null,
};

export const userTypeReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userType: action.payload,
      };
    default:
      return state;
  }
};
