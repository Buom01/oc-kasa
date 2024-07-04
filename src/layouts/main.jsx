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

export default function MainLayout({children})
{
  // const {  } = useLoaderData();

  return (
    <>
      <div className="container">
        <Header/>
        <main>
          {children ?? <Outlet />}
        </main>
      </div>
      <Footer/>
    </>
  );
}