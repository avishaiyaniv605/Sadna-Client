import { WishlistActionsTypes } from "./wishlist.types";

export const addItemToWishlist = item => {
  return {
    type: WishlistActionsTypes.ADD_ITEM_TO_WISHLIST,
    payload: item
  };
};

export const removeItemFromWishlist = item => {
  return {
    type: WishlistActionsTypes.REMOVE_ITEM_FROM_WISHLIST,
    payload: item
  };
};
