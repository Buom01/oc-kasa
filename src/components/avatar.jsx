import styles from './avatar.module.scss';

const Avatar = ({photo, firstname, lastname}) =>
(
    <img src={photo} alt={`${firstname} ${lastname}`} className={styles.avatar}/>
);

export default Avatar;