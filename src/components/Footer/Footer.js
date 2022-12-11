import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <ul className="FooterGroup">
        <a href="/">
          <li className="FooterItem">Accueil</li>
        </a>
        <a>
          <li className="FooterItem">A Propos</li>
        </a>
        <a>
          <li className="FooterItem">Mentions Légales</li>
        </a>
        <a>
          <li className="FooterItem">Contact</li>
        </a>
      </ul>
      <span>Copyright © cybersafe-dls.fr - Tous droit réservés</span>
    </div>
  );
}
export default Footer;
