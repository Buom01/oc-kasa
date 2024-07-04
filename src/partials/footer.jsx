import Logo from "../components/logo";
import styles from './footer.module.scss'

const Footer = () =>
(
    <footer className={styles.main}>
        <Logo color="white"/>
        <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;