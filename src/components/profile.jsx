import styles from './profile.module.scss';

const Avatar = ({photo, firstname, lastname}) =>
(
    <img src={photo} alt={`${firstname} ${lastname}`} className={styles.avatar}/>
);

const Profile = ({photo, firstname, lastname}) =>
(
    <div className={styles.main}>
        <p>{firstname}<br/>{lastname}</p>
        <Avatar {...{photo, firstname, lastname}} />
    </div>
);

export default Profile;