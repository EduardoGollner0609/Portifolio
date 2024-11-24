import "./styles.css";
import dscommerceImg from "../../assets/imagem-dscommerce.png";

export default function Projects() {
  return (
    <section id="section-projects">
      <div className="projects-list">
        <a href="https://dscommerce-dudu.netlify.app">
          <div className="project-item">
            <div className="project-item-img">
              <img src={dscommerceImg} alt="" />
            </div>
            <div className="project-item-content">
              <h3>DSCommerce</h3>
              <p>
                Este projeto foi desenvolvido durante o desafio de um curso da
                plataforma DevSuperior, aonde utilizei das tecnologias:
                React(Router, Axios, Query, JWT-Decode, Select, History, QS) e
                Spring(Web, JPA, Security, Oauth2, JWT, H2 Database para teste e
                PostgreSql)
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
