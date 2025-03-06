import './styles.css';
import homeIcon from '../../assets/home-icon.svg';
import { NavLink } from 'react-router-dom';

export default function Aside() {
    return (
        <aside className="aside-options-navegation">

            <div className="logo-space">
                <li className="logo-title">
                    <h2>Eduardo</h2>
                </li>
            </div>

            <ul className="list-options-navegation">
                <li className="option-navegation-item">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "option-navegation-item-active" : ""}>
                        <span className="icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="text">
                            Inicio
                        </span>
                    </NavLink>
                </li>
                <li className="option-navegation-item">
                    <NavLink to="/projects" className={({ isActive }) =>
                        isActive ? "option-navegation-item-active" : ""}>
                        <span className="icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="text">
                            Projetos
                        </span>
                    </NavLink>
                </li>
            </ul>
        </aside >
    );
}