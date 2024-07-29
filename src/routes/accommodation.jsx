import { useLoaderData } from "react-router-dom";

import Slider from "../components/slider";
import Tags from "../components/tags";
import Spoiler from "../components/spoiler";
import Stars from "../components/stars";
import Equipments from "../components/equipments";
import Profile from "../components/profile";

import styles from './accommodation.module.scss';


export default function Accommodation()
{
  const accommodation = useLoaderData(); // @Présente-moi

  let names = accommodation.host.name.split(' '); // @Présente-moi
  let firstname = names[0];
  let lastname = names.slice(1).join(' ')

  return (
    <div className={styles.main}>

      <Slider images={accommodation.pictures.map(
        link => ({src: link, alt: accommodation.title})
      )}/>

      <div className={styles.infos}>
        <div className={styles.infosShowoff}>
          <header className={styles.header}>
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </header>
          <Tags tags={accommodation.tags}/>
        </div>
        <div className={styles.infosSide}>
          <Profile firstname={firstname} lastname={lastname} photo={accommodation.host.picture}/>
          <Stars count={parseInt(accommodation.rating)}/>
        </div>
      </div>

      <div className={styles.details}>
        <Spoiler title="Description">
          {accommodation.description}
        </Spoiler>
        <Equipments values={accommodation.equipments}/>
      </div>
    </div>
  );
}
