import Tag from "./tag";

const Tags = ({tags, ...props}) =>
(
    <div className="tags">
        {(tags || []).map(
            tag =>
                <Tag {...props} key={tag}>{tag}</Tag>
        )}
    </div>
);

export default Tags;