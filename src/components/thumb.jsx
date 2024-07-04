import styles from './thumb.module.scss'

const Thumb = ({name, ...props}) =>
(
    <a {...props} className={styles.main}><span>{name}</span></a>
)

export default Thumb;