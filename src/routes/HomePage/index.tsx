import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import AboutMe from "./AboutMe";
import HeaderNavegation from "../../components/HeaderNavegation";

export default function HomePage() {
  return (
    <>
      <Header />
      <AboutMe />
      <HeaderNavegation />
      <Outlet />
    </>
  );
}
