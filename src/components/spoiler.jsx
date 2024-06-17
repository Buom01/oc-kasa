const Spoiler = ({title, children, ...props}) =>
(
    <details {...props} className="spoiler">
        <summary>{title}</summary>
        {children}
    </details>
);

export default Spoiler;