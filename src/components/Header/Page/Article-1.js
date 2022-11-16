import React from "react";
import "./Page.scss";

function Article1() {
  return (
    <div className="Content">
      <h1>
        Article 1 : <br />
        Se protéger des e-mails frauduleux
      </h1>
      <img
        className="CenteredImg"
        src="https://cybersafe-dls.fr/theme1-img/t1-img1.webp"
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <p>
        L’hameçonnage (phishing en anglais) est une technique frauduleuse
        destinée à leurrer un internaute pour l’inciter à communiquer des
        données personnelles et/ou bancaires en se faisant passer pour un tiers
        de confiance. Cette arnaque peut être réalisée via différents canaux de
        communication, par exemple : courriels (emails), page internet...
      </p>
    </div>
  );
}
export default Article1;
