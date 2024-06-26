import Slider from "../components/slider";

import imageOne from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import imageTwo from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png';

export default function Logement()
{
  return (
    <>
      <Slider images={[
        {src: imageOne, alt: 'Image 1'},
        {src: imageTwo, alt: 'Image 2'}
      ]}/>
    </>
  );
}
