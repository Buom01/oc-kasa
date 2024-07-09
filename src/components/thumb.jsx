import { NavLink } from 'react-router-dom';
import styles from './thumb.module.scss'

const Thumb = ({name, image, ...props}) =>
(
    <NavLink {...props} className={styles.main}>
        <img src={image} alt={name}/>
        <span>{name}</span>
    </NavLink>
)

export default Thumb;