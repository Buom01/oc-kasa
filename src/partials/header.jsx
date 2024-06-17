import PoweredNavlink from "../components/powered-navlink";
import Logo from "../components/logo";

const Header = () =>
(
    <header>
        <Logo/>
        <nav>
            <PoweredNavlink to="/">Accueil</PoweredNavlink>
            <PoweredNavlink to="/a-propos">A propos</PoweredNavlink>
        </nav>
    </header>
);

export default Header;