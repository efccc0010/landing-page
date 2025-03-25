import React from "react";
import HeaderPicture from "@/assets/images/picture/header-picture.svg?react";
import {
  HeaderContainer,
  HeaderText,
  HeaderTextDescription,
  HeaderTextTitle,
} from "./Header.styled";

function Header() {
  return (
    <HeaderContainer>
      <HeaderText>
        <HeaderTextTitle>
          Navigating the digital landscape for success
        </HeaderTextTitle>
        <HeaderTextDescription>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </HeaderTextDescription>
        <button>Book a consultation</button>
      </HeaderText>
      <HeaderPicture> </HeaderPicture>
    </HeaderContainer>
  );
}

export default React.memo(Header);
