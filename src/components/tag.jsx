const Tag = ({children, ...props}) =>
(
    <span {...props} className="tag">{children}</span>
);

export default Tag;