import { WishlistActionsTypes } from "./wishlist.types";
import { addItemToWishlist } from "./wishlist.utils";

const INITIAL_STATE = {
  wishlistItems: []
};

const WishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionsTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemToWishlist(action.payload, state.wishlistItems)
      };
    default:
      return state;
  }
};

export default WishlistReducer;
