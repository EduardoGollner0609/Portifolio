import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import AboutMe from "./AboutMe";

export default function HomePage() {
  return (
    <>
      <Header />
      <AboutMe />
      <Outlet />
    </>
  );
}
