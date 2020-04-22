import styled from "styled-components";

export const OrderSummeryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

export const OrderDetailsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const VerticalSpacer = styled.div`
  border-left: 1px solid gray;
`;

// .order-container {
//   display: flex;
//   justify-content: center;

//   .order-summery {
//     width: 40vw;
//     letter-spacing: 1px;
//     display: flex;
//     flex-direction: column;
//     text-align: center;

//     .order-details {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       text-align: left;
//       font-size: 1vw;
//     }

//     .logo {
//       width: 1.5vw;
//       height: 1.5vw;
//     }
//     .shipping,
//     .method,
//     .billing {
//       display: flex;
//       flex-direction: column;
//       margin: 0 auto;
//     }

//     .section-title {
//       font-weight: bold;
//     }

//     .shippment-logo {
//       width: 15vw;
//       height: 15vw;
//       align-self: center;
//     }

//     .title {
//       font-size: 2.5vw;
//       font-weight: normal;
//     }

//     .vl {
//       border-left: 1px solid gray;
//     }
//   }
// }
