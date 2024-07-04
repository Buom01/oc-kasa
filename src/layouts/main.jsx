import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";

import Header from "../partials/header";
import Footer from "../partials/footer";
import styles from './main.module.scss';


export async function loader()
{
  
  return {};
}

export default function MainLayout({children})
{
  // const {  } = useLoaderData();

  return (
    <>
      <div className={styles.container}>
        <Header/>
        <main>
          {children ?? <Outlet />}
        </main>
      </div>
      <Footer/>
    </>
  );
}