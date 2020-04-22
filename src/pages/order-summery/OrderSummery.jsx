import React from "react";
import { ReactComponent as ShippmentLogo } from "../../assets/paper-plane-color.svg";
import { ReactComponent as CardLogo } from "../../assets/card.svg";
import { ReactComponent as DeliveryLogo } from "../../assets/delivery-truck.svg";
import { ReactComponent as LocationLogo } from "../../assets/location.svg";
import OrderDetail from "../../components/order-detail/order-detail.component";
import {
  OrderSummeryContainer,
  OrderDetailsContainer,
  VerticalSpacer
} from "./OrderSummery.styles.jsx";

const OrderSummery = ({ location }) => {
  const { card, email } = location.state.token;
  const paperAirplaneStyles = {
    width: "250px",
    height: "250px"
  };
  console.log(location.state.token);
  return (
    <OrderSummeryContainer>
      <ShippmentLogo style={paperAirplaneStyles} />
      <h1>Congratulations {card.name}, Your order has been placed!</h1>
      <h3>You will receive a confirmation email shortly at {email}</h3>
      <OrderDetailsContainer>
        <OrderDetail card={card} Logo={LocationLogo} type="Shipping Address" />
        <VerticalSpacer />
        <OrderDetail Logo={CardLogo} card={card} type="Payment Information" />
        <VerticalSpacer />
        <OrderDetail Logo={DeliveryLogo} card={card} type="Shipping method" />
      </OrderDetailsContainer>
    </OrderSummeryContainer>
  );
};

export default OrderSummery;
