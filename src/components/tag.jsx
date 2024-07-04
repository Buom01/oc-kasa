import styles from './tag.module.scss'

const Tag = ({children, ...props}) =>
(
    <span {...props} className={styles.main}>{children}</span>
);

export default Tag;