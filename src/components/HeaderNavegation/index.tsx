import { NavLink } from "react-router-dom";
import "./styles.css";

export default function HeaderNavegation() {
  return (
    <div className="navegation-options">
     <NavLink to="">Projetos</NavLink>
      <NavLink to="">Espaço2</NavLink>
      <NavLink to="">Espaço3</NavLink>
    </div>
  );
}
