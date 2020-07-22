import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature
        heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
      />
    </AnimationRevealPage>
  );
}
