import styles from './thumb.module.scss'

const Thumb = ({name, image, ...props}) =>
(
    <a {...props} className={styles.main}>
        <img src={image} alt={name}/>
        <span>{name}</span>
    </a>
)

export default Thumb;