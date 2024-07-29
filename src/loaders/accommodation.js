import data from '../assets/logements.json';
import { json } from "react-router-dom";

function getAccommodationSync(id)
{
  return data.find(
    accommodation => accommodation.id === id
  );
}

async function accommodationLoader({params})
{
  const data = getAccommodationSync(params.id);
  if (!data)
    throw new Response("Not Found", { status: 404 });

  return json(getAccommodationSync(params.id));
}

export default accommodationLoader;