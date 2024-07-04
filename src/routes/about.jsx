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
        <Spoiler title="Description">
          ................................<br/>
          .............................
        </Spoiler>
        <Spoiler title="Description">
          ................................<br/>
          .............................
        </Spoiler>
      </div>
    </>
  );
}
