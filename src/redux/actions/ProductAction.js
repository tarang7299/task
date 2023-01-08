import { ActionTypes } from "../constant/ActionType";

export const SetItemToCart = (item) => {
  return {
    type: ActionTypes.SET_ITEM_TO_CART,
    payload: item,
  };
};
export const SetItemToWishlist = (item) => {
  return {
    type: ActionTypes.SET_ITEM_TO_WISHLIST,
    payload: item,
  };
};
