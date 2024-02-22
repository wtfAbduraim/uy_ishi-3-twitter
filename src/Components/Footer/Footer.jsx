import React from "react";
import "./Footer.scss";
import Languages from "../Localization/Localization";
import { Context as LocalizationContext } from "../Context/Localization";
import { Context as ThemeContext} from "../Context/Theme";
import Search from "../Lib/Img/search.svg";
import Setting from "../Lib/Img/setting.svg";
import menu from "../Lib/Img/Menu.svg";
import profil from "../Lib/Img/person_hdr.jpg";

function Footer() {
  const { lang } = React.useContext(LocalizationContext);
  const {theme} = React.useContext(ThemeContext)

  return (
    <>
      <footer className={`footer footer--${theme}`}>
        <div className="footer-container">
          <div className="footer__div">
            <img
              className="footer__search"
              src={Search}
              alt="logo"
              width={19}
              height={19}
            />
            <input
              className="footer__input"
              type="text"
              placeholder={Languages[lang].footer.inputf}
            />
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__heading">{Languages[lang].footer.head}</h4>
              <img src={Setting} alt="set" width={20} height={20} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">{Languages[lang].footer.head_1}</p>
                <h5 className="footer__title">
                  {Languages[lang].footer.head_2}
                </h5>
                <p className="footer__post">{Languages[lang].footer.head_3}</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">{Languages[lang].footer.head_1}</p>
                <h5 className="footer__title">
                  {Languages[lang].footer.head_2}
                </h5>
                <p className="footer__post">{Languages[lang].footer.head_3}</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">{Languages[lang].footer.head_1}</p>
                <h5 className="footer__title">
                  {Languages[lang].footer.head_2}
                </h5>
                <p className="footer__post">{Languages[lang].footer.head_3}</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>
            <a className="footer__show" href="#">
              {Languages[lang].footer.head_4}
            </a>
          </ul>

          <ul className="footer__may">
            <h5 className="footer__heading">{Languages[lang].footer.head_5}</h5>
            <li className="footer__lay">
              <img
                className="hdr__human rr"
                src={profil}
                alt="logo"
                width={60}
                height={60}
              />
              <div className="footer__flex">
                <h5 className="footer__title">Mushtariy</h5>
                <p className="footer__post">@Mushtar565266</p>
              </div>
              <button className="footer__btn">
                {Languages[lang].footer.head_6}
              </button>
            </li>

            <li className="footer__lay">
              <img
                className="hdr__human rr"
                src={profil}
                alt="logo"
                width={60}
                height={60}
              />
              <div className="footer__flex">
                <h5 className="footer__title">Mushtariy</h5>
                <p className="footer__post">@Mushtar565266</p>
              </div>
              <button className="footer__btn">
                {Languages[lang].footer.head_6}
              </button>
            </li>
            <a className="footer__show" href="#">
              {Languages[lang].footer.head_4}
            </a>
          </ul>

          <a className="footer__link-1" href="#">
            {Languages[lang].footer.head_7}{" "}
            <span className="footer__span">
              {Languages[lang].footer.head_8}
            </span>{" "}
            {Languages[lang].footer.head_9}
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
