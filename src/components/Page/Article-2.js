import React from "react";
import "./Page.scss";

function Article2() {
  return (
    <div className="Content">
      <h1>
        Article 2 : <br />
        Securisation des mots de passe
      </h1>
      <img
        className="CenteredImg"
        src={require("../../assets/theme2-img/t2-img1.webp")}
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <br />

      <h2>❓ Qu'est-ce qu'un mot de passe ?</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Un mot de passe est un mot ou une série de caractères utilisés comme
          moyens d'authentification pour prouver son identité lorsque l'on
          désire accéder à un espace protégé, comme un ordinateur, ou un compte
          par exemple.
        </p>
      </div>

      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Le but du cybercriminel est de récupérer vos mots de passe pour
          pouvoir accéder à vos comptes. L’accès à vos comptes est dangereux
          puisque le hackeur peut récupérer vos données personnelles et se faire
          passer pour vous. Il pourra aussi réinitialiser votre mot de passe
          actuel et ensuite revendre votre compte sur des sites illégaux. De
          même pour vos données personnelles, elles peuvent être revendues à des
          fins illégales.
          <br />
          <br />
          Voici ce qu’il peut récupérer :
          <ul className="ArticleList">
            <li>➡️ Nom, Prénom, </li>
            <li>➡️ Adresse Mail,</li>
            <li>➡️ Mot de passe,</li>
            <li>➡️ Numéro de téléphone,</li>
            <li>➡️ Comptes bancaires,</li>
            <li>➡️ Comptes sur les réseaux sociaux.</li>
          </ul>
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Un attaquant a plusieurs manières de récupérer vos mots de passe :
        </p>
        <ul className="ArticleList">
          <li>➡️ Espionnage,</li>
          <li>➡️ Phishing,</li>
          <li>➡️ Écoute téléphonique,</li>
          <li>➡️ Un logiciel qui enregistre votre écran ou votre voix.</li>
        </ul>
        <p>
          Afin de récupérer vos mots de passe, l'attaquant peut passer par un
          mail frauduleux, en vous appelant en se faisant passer pour une autre
          personne.
          <br />
          De plus, il peut vous contacter via les réseaux sociaux et encore plus
          facilement si votre compte est en public.
          <br />
          Sans oublier qu’il peut très bien récupérer la feuille ou le post-it
          qui contient vos mots de passe.
        </p>
        <p>
          Cependant la plus connue reste celle du brut force.
          <br />
          <br />
          Cette attaque consiste à :
        </p>
        <ul className="ArticleList">
          <li>
            ➡️ Essayer une liste de mot de passe qui sont rangés ou non, jusqu’à
            trouver votre mot de passe,
          </li>
          <li>
            ➡️ Plus le mot de passe est compliqué et peu commun, plus
            l’attaquant prendra du temps à le trouver avec cette attaque.
          </li>
        </ul>
        <img
          className="ContentImg"
          src={require("../../assets/theme1-img/t1-img2.webp")}
        ></img>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <div className="GridContainer">
          <img
            className="ContentImg"
            src={require("../../assets/theme1-img/t1-img3.webp")}
          ></img>

          <div>
            <p>
              Afin de vous sensibiliser sur les mails frauduleux, nous allons
              vous expliquer comment les reconnaître et vous en protégez. Il est
              important d’apprendre à repérer les arnaques, et ce, avant même de
              cliquer sur le contenu du message.
            </p>
            <br />
            <p>
              💡Conseil pour les liens : <br />
              <br />
              Vous pouvez vérifier la destination du lien qui est caché derrière
              le mot "Connexion" en positionnant le curseur devant celui-ci sans
              cliquer dessus, vous pourrez ensuite voir le lien s'afficher en
              bas à gauche de votre navigateur. <br />
              <br />
              ➡️ Le meilleur moyen reste de vous rendre manuellement le sur site
              officiel via l'adresse sur votre moteur de recherche au lieu de
              cliquer sur le lien du mail.
            </p>
          </div>
        </div>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Lorsque l'auteur de l'escroquerie est identifiable, la victime de
          l'arnaque sur Internet peut saisir une juridiction civile pour obtenir
          le remboursement des sommes extorquées et des dommages et intérêts en
          cas de préjudice.
        </p>
        <p>
          En cas de phishing où toute autre forme d'escroquerie, la victime peut
          porter plainte auprès d'un commissariat. Si l'auteur de l'arnaque sur
          Internet n'est pas identifiable, la victime peut porter plainte contre
          escroc. Le tribunal pénal saisi peut non seulement sanctionner
          l'auteur de l'escroquerie, mais aussi octroyer des dommages et
          intérêts au particulier arnaqué sur Internet.
        </p>
        <p>
          Le particulier arnaqué sur Internet peut toujours opter pour la saisie
          des tribunaux français, que l'auteur de l'escroquerie se situe en
          France ou à l'étranger.
        </p>
        <p>Procédure judiciaire</p>
        <p>
          À défaut de résolution amiable après l'envoi d'une lettre de mise en
          demeure, le particulier arnaqué sur Internet peut saisir au choix le
          tribunal d'instance lorsque le montant du litige est inférieur à 10
          000 € pour obtenir réparation. Ou le tribunal pénal pour faire
          sanctionner l'auteur de l'infraction et obtenir des dommages et
          intérêts.
        </p>
        <br />
        <p>
          <p></p>Usurpation d’identité :
        </p>
        <p>
          L’article 434-23 du Code pénal, qui punit de 5 ans d’emprisonnement et
          75 000 euros d’amende le fait de prendre le nom d’un tiers. Mais
          surtout, depuis la loi LOPSI II du 14 mars 2011, le « phishing »
          rentre dans le champ de la nouvelle incrimination relative à
          l’usurpation d’identité en ligne, que l’article 226-4-1 de Code pénal
          punit d’un an d’emprisonnement et de 15 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165379/#LEGISCTA000006165379">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Escroquerie :</p>
        <p>
          L’article 313-1 du Code pénal, punit de 5 ans d’emprisonnement et de
          375 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006165331/">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Collecte frauduleuse de données à caractère personnel :</p>
        <p>
          L’article 226-18 du Code pénal, qui prévoit une peine de 5 ans de
          prison et de 300 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165313/#LEGISCTA000006165313">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Atteinte à un système de traitement automatisé de données :</p>
        <p>
          L’article 323-3 du Code pénal, punit de deux ans d’emprisonnement et
          30 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006149839/">
            legifrance.gouv.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article2;
