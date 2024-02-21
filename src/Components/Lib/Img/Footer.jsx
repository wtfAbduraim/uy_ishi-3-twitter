import "./Footer.scss";
import Search from "../Lib/Img/search.svg";
import Setting from "../Lib/Img/setting.svg";
import menu from "../Lib/Img/Menu.svg";
import profil from "../Lib/Img/person_hdr.jpg";

function Footer() {
  return (
    <>
      <footer className="footer">
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
              placeholder="Search Twitter"
            />
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__heading">Trends for you</h4>
              <img src={Setting} alt="set" width={20} height={20} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">Trending in Germany</p>
                <h5 className="footer__title">Revolution</h5>
                <p className="footer__post">50.4K Tweets</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">Trending in Germany</p>
                <h5 className="footer__title">Revolution</h5>
                <p className="footer__post">50.4K Tweets</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>

            <li className="footer__info">
              <div className="footer__flex">
                <p className="footer__map">Trending in Germany</p>
                <h5 className="footer__title">Revolution</h5>
                <p className="footer__post">50.4K Tweets</p>
              </div>
              <img src={menu} alt="menu" width={17} height={4} />
            </li>
            <a className="footer__show" href="#">
              Show more
            </a>
          </ul>

          <ul className="footer__may">
            <h5 className="footer__heading">You might like</h5>
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
              <button className="footer__btn">Follow</button>
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
              <button className="footer__btn">Follow</button>
            </li>
            <a className="footer__show" href="#">
              Show more
            </a>
          </ul>

          <a className="footer__link-1" href="#">
            Terms of Service <span className="footer__span">Privacy Policy</span> Cookie Policy Imprint 
            Ads Info More ··· © 2021 Twitter, Inc.
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
