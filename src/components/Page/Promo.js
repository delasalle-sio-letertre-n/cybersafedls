import React from "react";
import "./Page.scss";

function Promo({ promoValue }) {
  switch (promoValue) {
    case "1":
      return (
        <>
          <p>
            Nous sommes une équipe composée de 5 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <img
            className="CenteredImg"
            src="https://cybersafe-dls.fr/accueil-img/accueil-img5.webp"
          ></img>
        </>
      );
      break;

    default:
      return (
        <>
          <p>
            Nous sommes une équipe composée de 6 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <div className="PromoWrapper">
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>Mathis Hervé</h2>
                <p>Chef de projet</p>
              </div>
            </div>
            <div className="PromoItem"></div>
            <div className="PromoItem"></div>
            <div className="PromoItem"></div>
            <div className="PromoItem"></div>
            <div className="PromoItem"></div>
          </div>
        </>
      );
      break;
  }
}
export default Promo;
