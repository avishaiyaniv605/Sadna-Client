import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "../../assets/animations.scss";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo hvr-bounce-in" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="hvr-underline-from-center" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="hvr-underline-from-center" to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          className="hvr-underline-from-center"
          onClick={() => auth.signOut()}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="hvr-underline-from-center" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <OptionLink className="hvr-underline-from-center" to="/wishlist">WISH LIST</OptionLink>
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
