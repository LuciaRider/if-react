import { USER_AUTH } from './actions.js';

export const initialState = {
  userData: null,
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};