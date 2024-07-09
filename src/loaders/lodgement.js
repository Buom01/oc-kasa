import data from '../assets/logements.json';
import { json } from "react-router-dom";

function getLodgementSync(id)
{
  return data.find(
    lodgement => lodgement.id === id
  );
}

async function lodgementLoader({params})
{
  const data = getLodgementSync(params.id);
  if (!data)
    throw new Response("Not Found", { status: 404 });

  return json(getLodgementSync(params.id));
}

export default lodgementLoader;