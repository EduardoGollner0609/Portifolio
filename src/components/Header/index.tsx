import "./styles.css";
import whatsIcon from "../../assets/whatsapp-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header-title">
          <Link to="/">
            <h1>Eduardo Sousa Gollner</h1>
            <h2>Desenvolvedor Fullstack</h2>
          </Link>
        </div>
        <div className="header-sociais-network">
          <a href="https://wa.me/5527992657127">
            <img src={whatsIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/eduardo-gollner/">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="https://github.com/EduardoGollner0609/">
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}
