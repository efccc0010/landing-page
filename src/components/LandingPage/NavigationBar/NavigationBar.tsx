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
        <a>About us</a>
        <a>Services</a>
        <a>Use Cases</a>
        <a>Pricing</a>
        <a>Blog</a>
        <button>Request a quote</button>
      </NavigationBarMenuContainer>
    </NavigationBarContainer>
  );
}

export default React.memo(NavigationBar);
