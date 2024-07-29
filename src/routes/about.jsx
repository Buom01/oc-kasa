import Introduction from "../components/introduction";
import aboutBackground from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import Spoiler from "../components/spoiler";
import styles from './about.module.scss'

export default function Home()
{
  return (
    <>
      <Introduction image={aboutBackground}/>
      <div className={styles.main}>
        <Spoiler title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Spoiler>
        <Spoiler title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Spoiler>
        <Spoiler title="Service">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Spoiler>
        <Spoiler title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </Spoiler>
      </div>
    </>
  );
}
