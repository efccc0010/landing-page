import React from "react";
import PositivusLogo from "@/assets/images/logos/positivus-logo.svg?react";
import {
  NavigationBarContainer,
  NavigationBarMenuContainer,
} from "./NavigationBar.styled";

function NavigationBar() {
  return (
    <NavigationBarContainer>
      <PositivusLogo />
      <NavigationBarMenuContainer>
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button>Request a quote</button>
      </NavigationBarMenuContainer>
    </NavigationBarContainer>
  );
}

export default React.memo(NavigationBar);
