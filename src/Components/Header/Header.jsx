import "./Header.scss"
import Localization from "../Localization/Localization"
import { Context as LangContext } from "../Context/Localization";
import Logo from "../Lib/Img/twitter-logo.svg"
import Home from "../Lib/Img/home.svg"
import Explore from "../Lib/Img/explore.svg"
import Notification from "../Lib/Img/notification.svg"
import messages from "../Lib/Img/messages.svg"
import Vector from "../Lib/Img/Vector.svg"
import List from "../Lib/Img/lists.svg"
import Prof from "../Lib/Img/profile-outline.svg"
import More from "../Lib/Img/more.svg"
import human from "../Lib/Img/person_hdr.jpg"
import Menu from "../Lib/Img/Menu.svg"

function Header() {
    return (
        <>
        <header className="header">
            <div className="header__container">
                <a className="header__logo" href="#link">
                    <img src={Logo} alt="Icon" className="header__img" width={40} height={33}/>
                </a>

                <div className="header__info">
                    <a href="#link" className="header__nlink">
                        <img src={Home} alt="Icon" width={28} height={28} /> Home
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={Explore} alt="Icon" width={28} height={28} /> Explore
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={Notification} alt="Icon" width={28} height={28} /> Notifications
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={messages} alt="Icon" width={28} height={28} /> Messages
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={Vector} alt="Icon" width={28} height={28} /> Bookmarks
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={List} alt="Icon" width={28} height={28} /> Lists
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={Prof} alt="Icon" width={28} height={28} /> Profile
                    </a>

                    <a href="#link" className="header__nlink">
                        <img src={More} alt="Icon" width={28} height={28} /> More
                    </a>
                </div>

                <button className="header__btn" type="button">Tweet</button>

                <div className="header__prof">
                    <img src={human} alt="Profissional" className="hdr__human" width={50} height={50}/>
                    <p className="hdr__p">Abduraim <br /> <span className="hdr__span">@wtf_abduraim</span></p>
                    <img src={Menu} alt="Icon" className="hdr__menu" />
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;