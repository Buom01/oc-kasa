const Thumb = ({name, ...props}) =>
(
    <a {...props} className="thumb"><span>{name}</span></a>
)

export default Thumb;