import React from "react";
import CardSection from "./CardSection/CardSection";
import CardSection1 from "@/assets/images/picture/card-section1.svg?react";
import CardSection2 from "@/assets/images/picture/card-section2.svg?react";
import CardSection3 from "@/assets/images/picture/card-section3.svg?react";
import CardSection4 from "@/assets/images/picture/card-section4.svg?react";
import CardSection5 from "@/assets/images/picture/card-section5.svg?react";
import CardSection6 from "@/assets/images/picture/card-section6.svg?react";
import { ServicesBlockContainer } from "./ServicesBlock.styled";

function ServicesBlock() {
  return (
    <ServicesBlockContainer>
      <CardSection
        title="Search engine"
        subtitle="optimization"
        bgColorContent="#F3F3F3"
        bgColorTitle="#B9FF66"
        ImageComponent={CardSection1}
      ></CardSection>
      <CardSection
        title="Pay-per-click"
        subtitle="advertising"
        bgColorContent="#B9FF66"
        bgColorTitle="#F3F3F3"
        ImageComponent={CardSection2}
      ></CardSection>
      <CardSection
        title="Social media"
        subtitle="Marketing"
        bgColorContent="#191A23"
        bgColorTitle="#F3F3F3"
        ImageComponent={CardSection3}
      ></CardSection>
      <CardSection
        title="Email"
        subtitle="Marketing"
        bgColorContent="#F3F3F3"
        bgColorTitle="#B9FF66"
        ImageComponent={CardSection4}
      ></CardSection>
      <CardSection
        title="Content"
        subtitle="Creation"
        bgColorContent="#B9FF66"
        bgColorTitle="#F3F3F3"
        ImageComponent={CardSection5}
      ></CardSection>
      <CardSection
        title="Analytics and"
        subtitle="Tracking"
        bgColorContent="#191A23"
        bgColorTitle="#B9FF66"
        ImageComponent={CardSection6}
      ></CardSection>
    </ServicesBlockContainer>
  );
}

export default React.memo(ServicesBlock);
