import styles from './stars.module.scss';
import Star from './star';

const Stars = ({count = 0, total = 5}) =>
(
    <div className={styles.main}>
        {[...new Array(count)].map(
            (_, index) => <Star active key={`star-${index}`}/>
        )}
        {[...new Array(total - count)].map(
            (_, index) => <Star key={`star-${count + index}`}/>
        )}
    </div>
)

export default Stars;