import "./styles.css";

export default function Projects() {
  return (
    <section id="section-projects">
      <h2>Projetos</h2>
      <div className="projects-list">
        <div className="project-item">
          <a href="https://dscommerce-dudu.netlify.app">
            <div className="project-item-top">
              <h3>DSCommerce</h3>
              <h4>Clique no card</h4>
            </div>
            <div className="project-item-bottom">
              <p>
                Este projeto foi desenvolvido durante o desafio de um curso da
                plataforma DevSuperior, aonde desenvolvi um site com um sistema simples de Ecommerce.
              </p>
            </div>

          </a>
        </div>

        <div className="project-item">
          <a href="https://gcbarbershop.netlify.app">
            <div className="project-item-top">
              <h3>GCBarbershop</h3>
              <h4>Clique no card</h4>
            </div>
            <div className="project-item-bottom">
              <p>Esse projeto é uma landing page(um site informativo focado na conversão de clientes) para uma barbearia chamada "GCbarbershop". Essa landing page foi desenvolvida seguindo um design que esteja de acordo com as cores de sua logo e conforme o gosto do cliente.</p>
            </div>
          </a>
        </div>

        <div className="project-item">
          <a href="https://system-list-tasks.netlify.app">
            <div className="project-item-top">
              <h3>Task List System</h3>
              <h4>Clique no card</h4>
            </div>
            <div className="project-item-bottom">
              <p>Esse projeto é um sistema de listagem de tarefas que foi desenvolvido durante um processo seletivo, aonde cumpri com todos os requisitos exigidos.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
