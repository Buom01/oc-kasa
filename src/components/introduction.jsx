
// Header image
const Introduction = ({title, image}) =>
(
    <div className="introduction" style={{backgroundImage: image}}>
        {title && <h1>{title}</h1>}
    </div>
);

export default Introduction;