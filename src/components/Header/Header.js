import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";
import HeaderLogo from "../../assets/logo_title-nobg.webp";
import "../MenuBurger/MenuBurger.scss";

function Header() {
  const [menuStatus, setMenuStatus] = useState("close");
  return (
    <div className="Header">
      <div className="MenuBurger">
        <div
          className="MenuBurger-container"
          role="button"
          onClick={() =>
            setMenuStatus(menuStatus === "open" ? "close" : "open")
          }
        >
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
        </div>
      </div>

      <nav className={"NavigationList-wrapper " + menuStatus}>
        <ul className="NavigationList" style={{ paddingLeft: 0 }}>
          <li>
            <Link to="/" className="underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/article-1" className="underline">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/#a-propos" className="underline">
              A propos
            </Link>
          </li>
          <li>
            <a href="#" className="underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <span className="LogoSpan">
        <img className="Logo" src={HeaderLogo} />
      </span>
    </div>
  );
}
export default Header;
