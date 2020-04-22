import React from "react";

import {
  ContactInfoContainer,
  OwnerLogosContainer
} from "./contact-info.styles";

import { ReactComponent as OwnerLogo1 } from "../../assets/owner1.svg";
import { ReactComponent as OwnerLogo2 } from "../../assets/owner2.svg";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <h2>Who We Are</h2>
      <OwnerLogosContainer>
        <OwnerLogo1 />
        <OwnerLogo2 />
      </OwnerLogosContainer>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ContactInfoContainer>
  );
};

export default ContactInfo;
