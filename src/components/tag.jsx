const Tag = ({name, ...props}) =>
(
    <span {...props} className="tag">{name}</span>
);

export default Tag;