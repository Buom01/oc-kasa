import { useState } from "react";
import prevIcon from '../assets/previous.svg';
import nextIcon from '../assets/next.svg';

import styles from './slider.module.scss';

const Slider = ({images}) =>
{
    const [position, setPosition] = useState(0);

    const nextAction = () =>
    {
        setPosition(
            (position) => 
            {
                if (position + 1 < images.length)
                    return position + 1;
                else
                    return 0;
            }
        )
    };
    const prevAction = () =>
    {
        setPosition(
            (position) => 
            {
                if (position < 1)
                    return images.length - 1;
                else
                    return position - 1;
            }
        )
    }

    const {src, alt} = images[position];

    return (
        <div className={styles.main}>
            <img {...{src,alt}} className={styles.image} />
            {images.length > 1 &&
                <>
                    <img src={prevIcon} alt="Précédente" className={styles.prev} onClick={prevAction}/>
                    <img src={nextIcon} alt="Suivante" className={styles.next} onClick={nextAction}/>
                    <p className={styles.pagination}>{position+1}/{images.length}</p>
                </>
            }
        </div>
    );
};

export default Slider;