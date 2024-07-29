import Introduction from "../components/introduction";
import introBackground from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png';
import ThumbGrid from "../components/thumbgrid";
import Thumb from "../components/thumb";

import data from '../assets/logements.json';

export default function Home()
{
  return (
    <>
      <Introduction title="Chez vous, partout et ailleurs" image={introBackground}/>
      <ThumbGrid>
        {
          data.map(
            accommodation =>
              <Thumb
                name={accommodation.title}
                to={`/accommodation/${accommodation.id}`}
                image={accommodation.cover}
                key={accommodation.id}
              />
          )
        }
      </ThumbGrid>
    </>
  );
}
