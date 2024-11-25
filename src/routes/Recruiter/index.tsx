import Projects from "../Projects";
import "./styles.css";

export default function Recruiter() {
  return (
    <>
      <section id="section-recruiter">
        <div className="my-skills">
          <div className="my-skills-hard-skills">
            <h3>Hard Skills</h3>
            <p>FrontEnd: HTML, CSS, JS, Typescript, React</p>
            <br />
            <p>
              BackEnd: Java, JDBC, JavaFX, Spring(Web, JPA, Security, Oauth2,
              JWT), Banco de dados relacionais como postgresSql, MySql, H2
              Database, SQL Server.
            </p>
          </div>

          <div className="my-skills-soft-skills">
            <h3>Soft Skills</h3>
            <p>- Capacidade de Trabalhar em equipe</p>
            <p>- Resiliência</p>
            <p>- Empatia</p>
            <p>- Flexibilidade</p>
            <p>- Boa comunicação</p>
          </div>
        </div>
      </section>
      <Projects />
    </>

  );
}
