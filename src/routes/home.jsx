import Introduction from "../components/introduction";
import introBackground from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import ThumbGrid from "../components/thumbgrid";
import Thumb from "../components/thumb";

export default function Home()
{
  return (
    <>
      <Introduction title="Chez vous, partout et ailleurs" image={introBackground}/>
      <ThumbGrid>
        <Thumb name="Location 1" href="/lodgement/1"/>
        <Thumb name="Location 2" href="/lodgement/1"/>
        <Thumb name="Location 3" href="/lodgement/1"/>
        <Thumb name="Location 4" href="/lodgement/1"/>
        <Thumb name="Location 5" href="/lodgement/1"/>
      </ThumbGrid>
    </>
  );
}
