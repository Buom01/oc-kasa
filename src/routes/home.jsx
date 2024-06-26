import Introduction from "../components/introduction";
import introBackground from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';

export default function Home()
{
  return (
    <>
      <Introduction title="Chez vous, partout et ailleurs" image={introBackground}/>
    </>
  );
}
