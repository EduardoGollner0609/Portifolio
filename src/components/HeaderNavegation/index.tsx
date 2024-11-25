import { NavLink } from "react-router-dom";
import "./styles.css";

export default function HeaderNavegation() {
  return (
    <div className="navegation-options">
      <h2>Agora me diz, quem é voce?</h2>
      <div className="navegation-options-item">
        <NavLink to="/client">Cliente</NavLink>
        <NavLink to="/recruiter">Recrutador</NavLink>
      </div>
    </div>
  );
}
