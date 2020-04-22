import React from "react";
import Contact from "../../components/contact/contact.component";
import ContactInfo from "../../components/contact-info/contact-info.component";
import { ContactPageContainer } from "./contact-page.styles";

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <Contact />
      <ContactInfo />
    </ContactPageContainer>
  );
};
export default ContactPage;
