import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

export default ({
  heading = "Mes réalisations",
  tabs = {
    Tous: [
      {
        imageSrc: "https://i.ibb.co/pXWQv0d/zaudifgjqypspfroi1hb.jpg",
        title: "Only Bloc",
        content: "Application web",
        url: "#onlyBloc"
      },
      {
        imageSrc: "https://i.ibb.co/sQtmDyY/Screenshot-from-2020-07-31-19-13-59.png",
        title: "Simple Loc",
        content: "Application web",
        url: "#simpleLoc"
      },
      {
        imageSrc: "https://i.ibb.co/tQXYR0Y/Screenshot-from-2020-07-31-19-12-42.png",
        title: "Covid 19 Stats",
        content: "Application web",
        url: "#covid19"
      },
      {
        imageSrc: "https://i.ibb.co/xmsVCST/Screenshot-from-2020-07-31-19-14-44.png",
        title: "Le Mouton Kiwi",
        content: "Blog",
        url: "#lmk"
      },
      {
        imageSrc: "https://i.ibb.co/jZTPknk/kwndw9dn9vi27k0oblio.jpg",
        title: "Elec Concept",
        content: "Site vitrine",
        url: "#elecConcept"
      },
      {
        imageSrc: "https://i.ibb.co/Dbn1Cy2/Screenshot-from-2020-07-31-19-16-13.png",
        title: "Relaxation Evolutive",
        content: "Site vitrine",
        url: "#relaxationEvolutive"
      },
    ],
    "Ruby on rails": [
      {
        imageSrc: "https://i.ibb.co/pXWQv0d/zaudifgjqypspfroi1hb.jpg",
        title: "Only Bloc",
        content: "Application web",
        url: "#onlyBloc"
      },
      {
        imageSrc: "https://i.ibb.co/sQtmDyY/Screenshot-from-2020-07-31-19-13-59.png",
        title: "Simple Loc",
        content: "Application web",
        url: "#simpleLoc"
      },
      
  ],
    "React": [
      {
        imageSrc: "https://i.ibb.co/sQtmDyY/Screenshot-from-2020-07-31-19-13-59.png",
        title: "Simple Loc",
        content: "Application web",
        url: "#simpleLoc"
      },
      {
        imageSrc: "https://i.ibb.co/tQXYR0Y/Screenshot-from-2020-07-31-19-12-42.png",
        title: "Covid 19 Stats",
        content: "Application web",
        url: "#covid19"
      }
    ],
    "WordPress": [
      {
        imageSrc: "https://i.ibb.co/xmsVCST/Screenshot-from-2020-07-31-19-14-44.png",
        title: "Le Mouton Kiwi",
        content: "Blog",
        url: "#lmk"
      },
      {
        imageSrc: "https://i.ibb.co/jZTPknk/kwndw9dn9vi27k0oblio.jpg",
        title: "Elec Concept",
        content: "Site vitrine",
        url: "#elecConcept"
      },
      {
        imageSrc: "https://i.ibb.co/Dbn1Cy2/Screenshot-from-2020-07-31-19-16-13.png",
        title: "Relaxation Evolutive",
        content: "Site vitrine",
        url: "#relaxationEvolutive"
      },
    ]
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>

                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Voir plus</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};
