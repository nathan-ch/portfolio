import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"
import Header from "components/headers/light.js";

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-80 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;


export default ({
  heading1 = "Je suis",
  heading2 = "Nathan Château, développeur web (React/Ruby on Rails)",
  imageSrc = "https://i.ibb.co/5nJMJfh/10122019-PANA2146.jpg",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Mes réalisations",
  buttonRounded = true,
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  return (
    <>
      <Container>
        <Header />
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading1}</Heading>
              <Heading>{heading2}</Heading>
              {/* <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton> */}
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};