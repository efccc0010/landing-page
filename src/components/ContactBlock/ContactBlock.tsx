import React from "react";
import { ContactBlockContainer } from "./ContactBlock.styled";
import ContactForm from "./ContactForm/ContactForm";

function ContactBlock() {
  return (
    <ContactBlockContainer>
      <ContactForm></ContactForm>
    </ContactBlockContainer>
  );
}

export default React.memo(ContactBlock);
