import { ActionTypes } from "../constant/ActionType";

export const AuthAction = (user) => {
  return {
    type: ActionTypes.AUTH,
    payload: user,
  };
};
