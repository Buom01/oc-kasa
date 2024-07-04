import Slider from "../components/slider";

import imageOne from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import imageTwo from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import Tags from "../components/tags";
import Spoiler from "../components/spoiler";
import Stars from "../components/stars";
import Equipments from "../components/equipments";
import Profile from "../components/profile";

import styles from './lodgement.module.scss';

export default function Lodgement()
{
  return (
    <div className={styles.main}>
      <Slider images={[
        {src: imageOne, alt: 'Image 1'},
        {src: imageTwo, alt: 'Image 2'}
      ]}/>
      <div className={styles.infos}>
        
      <div className={styles.infosShowoff}>
        <header>
          <h2>Cozy loft on the Canal Saint-Martin</h2>
          <p>Paris, île de France</p>
        </header>
        <Tags tags={['Cozy', 'Canal']}/>
      </div>
      <div className={styles.infosSide}>
        <Profile firstname={"Alexandre"} lastname={"Dumas"} photo={null}/>
        <Stars count={3}/>
      </div>
      </div>

      <div className={styles.details}>
        <Spoiler title="Description">
          ................................<br/>
          .............................
        </Spoiler>
        <Equipments values={["Wifi", "Terasse", "..."]}/>
      </div>
    </div>
  );
}
