export const addItemToWishlist = (itemToAdd, wishlistItems) => {
  const existingWishlistItem = wishlistItems.find(
    wishlistItem => wishlistItem.id === itemToAdd.id
  );

  if (!existingWishlistItem) {
    return [...wishlistItems, itemToAdd];
  }

  return wishlistItems;
};
