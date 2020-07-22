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
        heading={<>Site statistique sur l'épidémie du <HighlightedText>Covid 19</HighlightedText></>}
        subheading={<>Projet personnel</>}
        imageSrc={"https://i.ibb.co/k0yYfbH/smartmockups-kcxdx4v6.png"}
        description={"Site statistique, en anglais et français, sur l'épidémie du Covid-19 pour le pays sélectionné ou le monde entier. On y voit l'évolution de l'épidémie et les statistiques pour un seul jour. L'application est en React.JS sans backend et basé sur deux API."}
        primaryButtonUrl={"https://corona.nathan-ch.now.sh/"}
        featureDescription={"React.js | API : Covid19AP | graphiques : recharts | Switch français/anglais"}
        textOnLeft={true}
      />
      <MainFeature
        heading={<>OnlyBloc <br></br> <HighlightedText> Comparateur de salles d'escalade</HighlightedText></>}
        subheading={<>Fondateur</>}
        imageSrc={"https://i.ibb.co/t2SGJRm/smartmockups-kcxfjo20.png"}
        description={"Site pour trouver et comparer les salles d'escalades en France. L'utilisateur peut choisir une ville, accéder à toutes les salles d'escalade, filtrer et trier les salles par différents critères puis consulter les informations d'une salle. L'utilisateur peut noter et commenter les salles."}
        featureDescription={" Ruby on Rails | PostgreSQL | Devise | Leaflet | Heroku"}
        primaryButtonUrl={"only-bloc.herokuapp.com/"}
        textOnLeft={false}
      />
    </AnimationRevealPage>
  );
}
