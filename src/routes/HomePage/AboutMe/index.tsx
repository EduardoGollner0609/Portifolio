import "./styles.css";
import meImg from "../../assets/me-imagem.jpg";
import javaIcon from "../../assets/java-icon.svg";
import springIcon from "../../assets/spring-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import tpIcon from "../../assets/typescript-icon.svg";
import reactIcon from "../../assets/react-icon.svg";

export default function AboutMe() {
  return (
    <main>
      <section id="section-about-me">
        <div className="about-me-descriptions">
          <div className="about-me-descriptions-img">
            <img src={meImg} alt="" />
            <div className="about-me-descriptions-skills">
              <img src={javaIcon} alt="" />
              <img src={springIcon} alt="" />
              <img src={htmlIcon} alt="" />
              <img src={cssIcon} alt="" />
              <img src={tpIcon} alt="" />
              <img src={reactIcon} alt="" />
            </div>
          </div>
          <div className="about-me-descriptions-content">
            <h2>Sobre Mim😊</h2>
            <p>
              Prazer meu nome é Eduardo, e sou um estudante de programação muito
              dedicado e bastante ativo, sou rápido em aprender, gosto de buscar
              soluções em meio aos problemas, e amo interagir com pessoas,
              trabalhar em equipe para mim, nunca foi um problema.
            </p>
            <p>
              O que me motiva a acordar todos os dias pela manhã é saber que
              cada dia é uma nova oportunidade de me aperfeiçoar. sempre
              buscando melhorar, estudando e praticando.
            </p>
            <h2>Formações e cursos📚</h2>
            <a href="https://www.udemy.com/certificate/UC-1b17a043-9227-4675-9a9b-65912021c184/">
              <p>
                - Certificado em Java Completo (UDEMY - DevSuperior). Clique
                aqui
              </p>
            </a>
            <a href="https://devsuperior.club/c/5-3053">
              <p>
                - Certificado em Java Spring Professional(DevSuperior). Clique
                Aqui
              </p>
            </a>

            <a href="https://devsuperior.club/c/5-3053">
              <p>
                - Certificado em Java Spring Expert(DevSuperior). Clique Aqui
              </p>
            </a>
            <a href="https://devsuperior.club/c/5-3053">
              <p>
                - Certificado em ReactJs Professional (DevSuperior). Clique Aqui
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
