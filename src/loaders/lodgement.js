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
    return json(getLodgementSync(params.id));
}

export default lodgementLoader;