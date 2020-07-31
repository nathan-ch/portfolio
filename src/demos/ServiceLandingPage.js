import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import TabCardGrid from "components/cards/TabCardGrid";
const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <TabCardGrid/>
      <div id="onlyBloc">
        <MainFeature
          heading={<>OnlyBloc <br></br> <HighlightedText> Comparateur de salles d'escalade</HighlightedText></>}
          subheading={<>Fondateur</>}
          imageSrc={"https://i.ibb.co/t2SGJRm/smartmockups-kcxfjo20.png"}
          description={"OnlyBloc est une application pour trouver et comparer les salles d'escalades en France. L'utilisateur peut choisir une ville, accéder à toutes les salles d'escalade, filtrer et trier les salles par différents critères puis consulter les informations d'une salle. L'utilisateur peut noter et commenter les salles."}
          featureDescription={" Ruby on Rails | PostgreSQL | Devise | Leaflet | Heroku"}
          primaryButtonUrl={"https://only-bloc.herokuapp.com/"}
          textOnLeft={true}
        />
      </div>
      <div id="simpleLoc">
        <MainFeature
            heading={<>SimpleLoc <br></br> <HighlightedText>Louer un appartement facilement</HighlightedText></>}
            subheading={<>Freelance</>}
            imageSrc={"https://i.ibb.co/Qr1Zn3Q/smartmockups-kcym7plr.png"}
            description={"SimpleLoc est une application qui simplifie la mise en location d'un bien immoblier pour le propriétaire et le locataire. Le propriétaire peut mettre le bien à louer sur SimpleLoc et donner la référence du bien dans n'importe quel autre site. Le locataire pourra retrrouver le bien sur SimpleLoc et réserver un créneau de visite, envoyer sers pièces justificatives. Le propriétaire retrouvera toutes les personnes intéressés, avec leur profil et leurs pièces justificatives."}
            featureDescription={" API Rest Ruby on Rails | React.js | PostgreSQL | Devise | Leaflet | Heroku"}
            primaryButtonUrl={"https://simpleloc.herokuapp.com/"}
            textOnLeft={false}
          />
      </div>
      <div id="covid19">
        <MainFeature
          heading={<>Site statistique sur l'épidémie du <HighlightedText>Covid 19</HighlightedText></>}
          subheading={<>Projet personnel</>}
          imageSrc={"https://i.ibb.co/k0yYfbH/smartmockups-kcxdx4v6.png"}
          description={"Site statistique, en anglais et français, sur l'épidémie du Covid-19 pour le pays sélectionné ou le monde entier. On y voit l'évolution de l'épidémie et les statistiques pour un seul jour. L'application est en React.JS sans backend et basé sur deux API."}
          primaryButtonUrl={"https://corona.nathan-ch.now.sh/"}
          featureDescription={"React.js | API : Covid19AP | graphiques : recharts | Switch français/anglais"}
          textOnLeft={true}
        />
      </div>
      <div id="lmk">
        <MainFeature
          heading={<>Le Mouton Kiwi <br></br> <HighlightedText>Blog voyage</HighlightedText></>}
          subheading={<>Cofondateur</>}
          imageSrc={"https://i.ibb.co/4P3p9cW/smartmockups-kda6l0ln.png"}
          description={"Blog sur le thème du voyage avec 5 pages statiques, des posts de blog, une newsletter, l'intégration d'un feed instagram et de vidéos youtube."}
          featureDescription={" CMS WordPress | Page Builder Elementor Pro | Newsletter MailChimp | Feed instagram | vidéos youtube"}
          primaryButtonUrl={"https://www.lemoutonkiwi.fr/"}
          textOnLeft={false}
        />
      </div>
      <div id="elecConcept">
        <MainFeature
          heading={<>Elec Concept <br></br> <HighlightedText>Site vitrine électricité générale</HighlightedText></>}
          subheading={<>Freelance</>}
          imageSrc={"https://i.ibb.co/JpH0m4F/smartmockups-kcymzous.png"}
          description={"Site vitrine de Sebastien Mozet, électricien. Il s'agit d'un site statique de 5 pages sous le CMS WordPress."}
          featureDescription={" CMS WordPress | Page Builder Elementor Pro"}
          primaryButtonUrl={"https://www.elecconcept44.fr/"}
          textOnLeft={true}
        />
      </div>
      <div id="relaxationEvolutive">
        <MainFeature
          heading={<>Relaxation Evolutive <br></br> <HighlightedText>Site vitrine et boutique de sophrologie</HighlightedText></>}
          subheading={<>Freelance</>}
          imageSrc={"https://i.ibb.co/2cnM3Jc/smartmockups-kcynau86.png"}
          description={"Site vitrine et boutique de Véronique Trigalou, sophrologue. Il s'agit d'un site statique d'une dizaine de pages sous le CMS WordPress."}
          featureDescription={" CMS WordPress | Page Builder Elementor Pro"}
          primaryButtonUrl={"https://relaxationevolutive.fr/"}
          textOnLeft={false}
        />
      </div>
    <MiniCenteredFooter />
    </AnimationRevealPage>
  );
}