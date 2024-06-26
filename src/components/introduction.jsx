
// Header image
const Introduction = ({title, image}) =>
(
    <div className="introduction" style={{background: `center/cover url("${image}"), rgba(0,0,0,0.6)`}}>
        {title && <h1>{title}</h1>}
    </div>
);

export default Introduction;