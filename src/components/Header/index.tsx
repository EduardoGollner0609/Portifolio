import './styles.css';

import whatsappIcon from '../../assets/whatsapp-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';

export default function Header() {

    return (
        <header>
            <nav className='container'>
                <div className="header-title">
                    <h1>Eduardo Sousa Gollner</h1>
                    <h2>Desenvolvedor Fullstack</h2>
                </div>
                <div className="header-contacts">
                    <ul className="header-list-contacts">
                        <li className="option-contact-item">
                            <a href="https://wa.me/5527992657127?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20do%20seu%20portf%C3%B3lio.">
                                <img src={whatsappIcon} alt="" />
                            </a>
                        </li>
                        <li className="option-contact-item">
                            <a href="https://www.linkedin.com/in/eduardo-gollner/">
                                <img src={linkedinIcon} alt="" />
                            </a>
                        </li>
                        <li className="option-contact-item">
                            <a href="https://github.com/EduardoGollner0609">
                                <img src={githubIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}