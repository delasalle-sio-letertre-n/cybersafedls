import React, { useState } from "react";
import "./Page.scss";
import Promo from "./Promo";

function Main() {
  const [choixPromoValue, setChoixPromoValue] = useState();
  return (
    <div className="Content">
      <h1>Bienvenue !</h1>
      <img
        className="CenteredImg"
        src="https://cybersafe-dls.fr/accueil-img/accueil-img1.webp"
      ></img>
      <h2 id="a-propos">📌 À propos du projet</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Dans le cadre de notre 2ème année de BTS nous devons mettre en œuvre
          un projet annuel. Nous avons choisi de traiter un sujet en lien avec
          notre filière, c'est donc pour ça que nous sommes parties sur le thème
          de la cybersécurité.
        </p>
        <p>
          Le numérique étant de plus en plus présent dans notre quotidien et les
          cyberattaques ne cessant d'augmenter ces dernières années, les
          utilisateurs sont de plus en plus vulnérables. Le manque d’information
          se faisant ressentir, c’est pour cela que nous avons décidé de
          réaliser un site web qui a pour but de sensibiliser à la sécurité
          numérique.
        </p>
        <p>
          Notre projet se nomme <strong>CyberSafe-DLS</strong> et nous traitons
          divers sujets de cybersécurité, nous vulgarisons un maximum afin
          d’être compréhensible pour le plus grand nombre d’entre vous. Ainsi
          nous souhaitons promouvoir les bonnes pratiques en matière de sécurité
          numérique. Cette plateforme contiendra des ressources de
          sensibilisation adaptée à des utilisateurs non-initiés et nous leur
          mettons à disposition une boîte à outils numérique afin de se prémunir
          contre les attaques informatiques. Nous proposerons également des quiz
          pour ceux qui le souhaitent afin qu’ils puissent s’auto-évaluer sur
          les connaissances vues sur notre site.
        </p>
      </div>
      <h2>❓ Qui sommes-nous ?</h2>
      <hr />
      <div className="CategoryContent">
        <div className="ChoixPromoCenter">
          <p>Choix de la promo à afficher :</p>
          <select
            id="choixPromo"
            value={choixPromoValue}
            onChange={(e) => setChoixPromoValue(e.target.value)}
          >
            <option value="2">2022-2023</option>
            <option value="1">2021-2022</option>
          </select>
        </div>
        <Promo promoValue={choixPromoValue} />
      </div>
    </div>
  );
}
export default Main;
