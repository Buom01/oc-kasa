
const Avatar = ({photo, firstname, lastname}) =>
(
    <img src={photo} alt={`${firstname} ${lastname}`} className="avatar"/>
);

const Profile = ({photo, firstname, lastname}) =>
(
    <div className="profile">
        <p>{firstname}<br/>{lastname}</p>
        <Avatar {...{photo, firstname, lastname}} />
    </div>
);

export default Profile;