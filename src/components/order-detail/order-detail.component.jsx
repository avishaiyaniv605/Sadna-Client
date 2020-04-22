import React from "react";

import { OrderDetailContainer, DetailHeadline } from "./order-detail.styles";

const OrderDetail = props => {
  const {
    address_country,
    address_city,
    address_line1,
    address_zip
  } = props.card;
  const { type, Logo } = props;
  return (
    <OrderDetailContainer>
      <Logo />
      <DetailHeadline>{type}</DetailHeadline>
      <span>{address_country}</span>
      <span>{address_city}</span>
      <span>{address_line1}</span>
      <span>{address_zip}</span>
    </OrderDetailContainer>
  );
};

export default OrderDetail;
