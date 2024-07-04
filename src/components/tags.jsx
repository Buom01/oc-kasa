import Tag from "./tag";
import styles from './tags.module.scss';

const Tags = ({tags, ...props}) =>
(
    <div className={styles.main}>
        {(tags || []).map(
            tag =>
                <Tag {...props} key={tag}>{tag}</Tag>
        )}
    </div>
);

export default Tags;