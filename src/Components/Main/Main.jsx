import React from "react";
import "./Main.scss";
import Languages from "../Localization/Localization";
import { Context as LocalizationContext } from "../Context/Localization";
import useTheme from "../Hooks/usehooks";
import human from "../Lib/Img/person_hdr.jpg";
import AboutLogo from "../Lib/Img/about-logo.svg";
import FameLogo from "../Lib/Img/Frame.png";
import Menu from "../Lib/Img/Menu.svg";
import ZoroImg from "../Lib/Img/zoro-img.png";

function Main() {
  const { lang, setLang } = React.useContext(LocalizationContext);
  const [theme, setTheme] = useTheme();

  return (
    <>
      <main className={`main main--${theme}`}>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__div1">
              <p className="hero__home">{Languages[lang].main.text_1}</p>
              <div className="menu__hero">
                <select
                  className="select"
                  value={lang}
                  onChange={(evt) => setLang(evt.target.value)}
                >
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                  <option value="uz">UZ</option>
                </select>
                <select
                  className="select"
                  value={theme}
                  onChange={(evt) => setTheme(evt.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
            <span className="hero__line1"></span>
          </div>
        </section>

        <section className="about">
          <div className="hero__container">
            <div className="about__gap">
              <img
                className="hdr__human about__profi"
                src={human}
                alt="img"
                width={60}
                height={60}
              />
              <div className="about__info">
                <input
                  className="about__heading"
                  type="text"
                  placeholder={Languages[lang].main.input}
                />
                <div className="about__img">
                  <a href="#">
                    <img src={AboutLogo} alt="logo" width={24} height={24} />
                  </a>

                  <a href="#">
                    <img src={AboutLogo} alt="logo" width={24} height={24} />
                  </a>

                  <a href="#">
                    <img src={AboutLogo} alt="logo" width={24} height={24} />
                  </a>

                  <a href="#">
                    <img src={AboutLogo} alt="logo" width={24} height={24} />
                  </a>

                  <a href="#">
                    <img src={AboutLogo} alt="logo" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
            <button className="about__button">
              {Languages[lang].main.textbtn}
            </button>
          </div>
          <span className="about__line2"></span>
        </section>

        <section className="zoro">
          <div className="hero__container">
            <img
              className="hdr__human zoro__img"
              src={human}
              alt="img"
              width={60}
              height={60}
            />
            <div className="zoro__center">
              <div className="zoro__stix">
                <h3 className="zoro__heading">Designsta</h3>
                <a className="zoro__link" href="#">
                  @inner · 25m
                </a>
              </div>
              <p className="zoro__text">{Languages[lang].main.text_2}</p>
              <img
                className="zoro__fame"
                src={FameLogo}
                alt="fame"
                width={586}
                height={24}
              />
            </div>
            <img src={Menu} alt="menu" width={17} height={4} />
          </div>
          <span className="about__line2"></span>
        </section>

        <section className="zoro">
          <div className="hero__container">
            <img
              className="hdr__human zoro__img"
              src={human}
              alt="img"
              width={60}
              height={60}
            />
            <div className="zoro__center">
              <div className="zoro__stix">
                <h3 className="zoro__heading">cloutexhibition</h3>
                <a className="zoro__link" href="#">
                  @RajLahoti · 22m
                </a>
              </div>
              <p className="zoro__text">{Languages[lang].main.text_3}</p>
              <img
                className="zoro__fame"
                src={FameLogo}
                alt="fame"
                width={586}
                height={24}
              />
            </div>
            <img src={Menu} alt="menu" width={17} height={4} />
          </div>
          <span className="about__line2"></span>
        </section>

        <section className="zoro">
          <div className="hero__container">
            <img
              className="hdr__human zoro__img zoro--logo"
              src={human}
              alt="img"
              width={60}
              height={60}
            />
            <div className="zoro__center">
              <div className="zoro__stix">
                <h3 className="zoro__heading">CreativePhoto</h3>
                <a className="zoro__link" href="#">
                  @cloutexhibition · 1h
                </a>
              </div>
              <p className="zoro__text">{Languages[lang].main.text_4}</p>
              <img
                className="zoro--img"
                src={ZoroImg}
                alt="img"
                width={679}
                height={453}
              />
              <img
                className="zoro__fame"
                src={FameLogo}
                alt="fame"
                width={586}
                height={24}
              />
            </div>
            <img
              className="zoro__menu"
              src={Menu}
              alt="menu"
              width={17}
              height={4}
            />
          </div>
          <span className="about__line2"></span>
        </section>
      </main>
    </>
  );
}

export default Main;
