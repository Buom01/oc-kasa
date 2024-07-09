import styles from './profile.module.scss';
import Avatar from './avatar';

const Profile = ({photo, firstname, lastname}) =>
(
    <div className={styles.main}>
        <p>{firstname}<br/>{lastname}</p>
        <Avatar {...{photo, firstname, lastname}} />
    </div>
);

export default Profile;