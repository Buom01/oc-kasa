import Slider from "../components/slider";

import imageOne from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import imageTwo from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';
import Tags from "../components/tags";
import Spoiler from "../components/spoiler";
import Stars from "../components/stars";
import Equipments from "../components/equipments";

export default function Logement()
{
  return (
    <>
      <Slider images={[
        {src: imageOne, alt: 'Image 1'},
        {src: imageTwo, alt: 'Image 2'}
      ]}/>

      <header>
        <h2>Cozy loft on the Canal Saint-Martin</h2>
        <p>Paris, île de France</p>
      </header>

      <div>
        <Tags tags={['Cozy', 'Canal']}/>
      </div>

      <Spoiler title="Description">
        ................................<br/>
        .............................
      </Spoiler>
      <Stars count={3}/>
      <Equipments values={["Wifi", "Terasse", "..."]}/>
    </>
  );
}
