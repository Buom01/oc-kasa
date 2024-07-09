import {
  Outlet
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