import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  addItemToWishlist,
  removeItemFromWishlist
} from "../../redux/wishlist/wishlist.actions";
import WishListIcon from "../wishlist-icon/wishlist-icon.component";
import { ReactComponent as HeartIcon } from "../../assets/wishlist.svg";
import { ReactComponent as HeartIconColored } from "../../assets/wishlist-colored.svg";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

class CollectionItem extends React.Component {
  render() {
    const { item, addItemToCart, addItemToWishlist, wishlistItems } = this.props;
    const { name, price, imageUrl } = item;
    console.log(wishlistItems);

    return (
      <CollectionItemContainer>
        <BackgroundImage className="image" imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}&#8362;</PriceContainer>
          {
            <WishListIcon
              onClick={
                true
                  ? () => addItemToWishlist(item)
                  : () => removeItemFromWishlist(item)
              }
            >
              {true ? <HeartIconColored /> : <HeartIcon />}
            </WishListIcon>
          }
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemToCart(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
  addItemToWishlist: item => dispatch(addItemToWishlist(item)),
  removeItemFromWishlist: item => dispatch(removeItemFromWishlist(item))
});

const mapStateToProps = state => {
  return {
    wishlistItems: state.wishlistItems
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
