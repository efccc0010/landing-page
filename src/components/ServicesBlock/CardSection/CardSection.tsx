import React from "react";
import {
  CardSectionContainer,
  CardSectionContent,
  CardSectionDescription,
  CardSectionTitle,
} from "./CardSection.styled";
import ArrowDiagonal from "@/assets/images/icons/arrow-diagonal.svg?react";

interface CardSectionProps {
  title: string;
  subtitle: string;
  bgColorContent: string;
  bgColorTitle: string;
  ImageComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

function CardSection({
  title,
  subtitle,
  bgColorContent,
  bgColorTitle,
  ImageComponent,
}: CardSectionProps) {
  return (
    <CardSectionContainer bgColorContent={bgColorContent}>
      <CardSectionContent>
        <CardSectionTitle bgColorTitle={bgColorTitle}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </CardSectionTitle>
        <CardSectionDescription>
          <ArrowDiagonal />
          <span>Learn more</span>
        </CardSectionDescription>
      </CardSectionContent>
      <ImageComponent />
    </CardSectionContainer>
  );
}

export default React.memo(CardSection);
