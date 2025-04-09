import React from "react";
import AmazonLogo from "@/assets/images/logos/amazon-logo.svg?react";
import DribbleLogo from "@/assets/images/logos/dribble-logo.svg?react";
import HubSpotLogo from "@/assets/images/logos/hubspot-logo.svg?react";
import NotionLogo from "@/assets/images/logos/notion-logo.svg?react";
import NetflixLogo from "@/assets/images/logos/netflix-logo.svg?react";
import ZoomLogo from "@/assets/images/logos/zoom-logo.svg?react";
import { LogotypesContainer } from "./Logotypes.styled";

function Logotypes() {
  return (
    <LogotypesContainer>
      <AmazonLogo />
      <DribbleLogo />
      <HubSpotLogo />
      <NotionLogo />
      <NetflixLogo />
      <ZoomLogo />
    </LogotypesContainer>
  );
}

export default React.memo(Logotypes);
