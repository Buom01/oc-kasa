import PoweredNavlink from "../components/powered-navlink";
import Logo from "../components/logo";
import styles from './header.module.scss'

const Header = () =>
(
    <header className={styles.headbar}>
        <a className={styles.logo} href="/"><Logo/></a>
        <nav>
            <PoweredNavlink to="/">Accueil</PoweredNavlink>
            <PoweredNavlink to="/about">A propos</PoweredNavlink>
        </nav>
    </header>
);

export default Header;