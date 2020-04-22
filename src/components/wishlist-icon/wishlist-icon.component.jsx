import React from "react";

import { WishlistIconContainer } from "./wishlist-icon.styles";

const WishListIcon = ({ children, ...otherProps }) => {
  return (
    <WishlistIconContainer {...otherProps}>{children}</WishlistIconContainer>
  );
};

export default WishListIcon;
