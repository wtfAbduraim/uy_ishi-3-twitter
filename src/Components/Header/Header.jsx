import React from "react";
import "./Header.scss";
import Languages from "../Localization/Localization";
import { Context as LocalizationContext } from "../Context/Localization";
import { Context as ContextTheme } from "../Context/Theme";
import Logo from "../Lib/Img/twitter-logo.svg";
import Home from "../Lib/Img/home.svg";
import Explore from "../Lib/Img/explore.svg";
import Notification from "../Lib/Img/notification.svg";
import messages from "../Lib/Img/messages.svg";
import Vector from "../Lib/Img/Vector.svg";
import List from "../Lib/Img/lists.svg";
import Prof from "../Lib/Img/profile-outline.svg";
import More from "../Lib/Img/more.svg";
import human from "../Lib/Img/person_hdr.jpg";
import Menu from "../Lib/Img/Menu.svg";

function Header() {
  const { lang } = React.useContext(LocalizationContext);
  const { theme } = React.useContext(ContextTheme);

  return (
    <>
      <header className={`header header--${theme}`}>
        <div className="header__container">
          <a className="header__logo" href="#link">
            <img
              src={Logo}
              alt="Icon"
              className="header__img"
              width={40}
              height={33}
            />
          </a>

          <div className="header__info">
            <a href="#link" className="header__nlink">
              <img src={Home} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_1}
            </a>

            <a href="#link" className="header__nlink">
              <img src={Explore} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_2}
            </a>

            <a href="#link" className="header__nlink">
              <img src={Notification} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_3}
            </a>

            <a href="#link" className="header__nlink">
              <img src={messages} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_4}
            </a>

            <a href="#link" className="header__nlink">
              <img src={Vector} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_5}
            </a>

            <a href="#link" className="header__nlink">
              <img src={List} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_6}
            </a>

            <a href="#link" className="header__nlink">
              <img src={Prof} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_7}
            </a>

            <a href="#link" className="header__nlink">
              <img src={More} alt="Icon" width={28} height={28} />{" "}
              {Languages[lang].header.nav_8}
            </a>
          </div>

          <button className="header__btn" type="button">
            {Languages[lang].header.navbtn}
          </button>

          <div className="header__prof">
            <img
              src={human}
              alt="Profissional"
              className="hdr__human"
              width={50}
              height={50}
            />
            <p className="hdr__p">
              Abduraim <br /> <span className="hdr__span">@wtf_abduraim</span>
            </p>
            <img src={Menu} alt="Icon" className="hdr__menu" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
