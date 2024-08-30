import homeIcon from "../../images/home-icon.jpg";
import "./Header.scss";

const Header = () => {
    return (
        <div className="homeContainer">
            <div className="homeIcon">
                <a href="/">
                    <img src={homeIcon} alt="home icon" />
                </a>
            </div>

            <ul className="menu">
                <li className="menuItem">
                    <a href="/css">CSS</a>
                </li>
                <li className="menuItem">
                    <a href="/apollo">Apollo</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
