import { useRouteError } from "react-router-dom";
import MainLayout from "../layouts/main";
import styles from './error-page.module.scss';


export default function ErrorPage()
{
  const error = useRouteError();
  console.log(error);

  const message = error.status == 404 ?
    "Oups! La page que vous demandez n'existe pas." :
    (error.statusText || error.message);

  return (
    <MainLayout>
      <div className={styles.main}>
        <h2>{error.status}</h2>
        <p>{message}</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    </MainLayout>
  );
}
