import { ActionTypes } from "../constant/ActionType";

const initialState = {
  email: "",
  password: "",
};

// { type, payload } = action
const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.AUTH:
      return (state = {
        ...state,
        email: payload.email,
        password: payload.password,
      });
    default:
      return state;
  }
};

export default AuthReducer;
