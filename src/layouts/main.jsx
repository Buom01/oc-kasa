import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";

import Header from "../partials/header";
import Footer from "../partials/footer";


export async function loader()
{
  
  return {};
}

export default function MainLayout()
{
  // const {  } = useLoaderData();

  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}