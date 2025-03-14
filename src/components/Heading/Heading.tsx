import React from "react";
import { HeadingContainer } from "./Heading.styled";

function Heading() {
  return (
    <>
      <HeadingContainer>
        <label>Services</label>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </HeadingContainer>
    </>
  );
}

export default React.memo(Heading);
