import React from "react";
import { HeadingContainer } from "./Heading.styled";

interface HeadingProps {
  label: string;
  description: string;
}

function Heading({ label, description }: HeadingProps) {
  return (
    <>
      <HeadingContainer>
        <label>{label}</label>
        <p>{description}</p>
      </HeadingContainer>
    </>
  );
}

export default React.memo(Heading);
