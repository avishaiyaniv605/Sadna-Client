import ShopActionsTypes from "./shop.types";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionMap => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
  };
};
export const fetchCollectionsFailure = errorMessage => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
};
