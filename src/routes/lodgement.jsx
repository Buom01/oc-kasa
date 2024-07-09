import { useLoaderData } from "react-router-dom";

import Slider from "../components/slider";
import Tags from "../components/tags";
import Spoiler from "../components/spoiler";
import Stars from "../components/stars";
import Equipments from "../components/equipments";
import Profile from "../components/profile";

import styles from './lodgement.module.scss';


export default function Lodgement()
{
  const lodgement = useLoaderData(); // @Présente-moi

  let names = lodgement.host.name.split(' '); // @Présente-moi
  let firstname = names[0];
  let lastname = names.slice(1).join(' ')

  return (
    <div className={styles.main}>

      <Slider images={lodgement.pictures.map(
        link => ({src: link, alt: lodgement.title})
      )}/>

      <div className={styles.infos}>
        <div className={styles.infosShowoff}>
          <header className={styles.header}>
            <h1>{lodgement.title}</h1>
            <p>{lodgement.location}</p>
          </header>
          <Tags tags={lodgement.tags}/>
        </div>
        <div className={styles.infosSide}>
          <Profile firstname={firstname} lastname={lastname} photo={lodgement.host.picture}/>
          <Stars count={parseInt(lodgement.rating)}/>
        </div>
      </div>

      <div className={styles.details}>
        <Spoiler title="Description">
          {lodgement.description}
        </Spoiler>
        <Equipments values={lodgement.equipments}/>
      </div>
    </div>
  );
}
