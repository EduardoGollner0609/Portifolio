import './styles.css';
import homeIcon from '../../assets/home-icon.svg';

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
                    <a href="">
                        <span className="icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="text">
                            Inicio
                        </span>
                    </a>
                </li>
                <li className="option-navegation-item">
                    <a href="">
                        <span className="icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="text">
                            Projetos
                        </span>
                    </a>
                </li>
                <li className="option-navegation-item">
                    <a href="">
                        <span className="icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="text">
                            Contato
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}