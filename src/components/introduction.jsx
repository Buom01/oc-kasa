import styles from './introdudction.module.scss'

// Header image
const Introduction = ({title, image}) =>
(
    <div className={styles.main} style={{background: `center/cover url("${image}"), rgba(0,0,0,0.${title ? 6 : 3})`}}>
        {title && <h1>{title}</h1>}
    </div>
);

export default Introduction;