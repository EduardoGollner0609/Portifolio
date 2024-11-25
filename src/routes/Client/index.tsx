import "./styles.css";
import whatssapImg from "../../assets/whatsapp-icon.svg";

export default function Client() {
  return (
    <section id="section-client">
      <h2>Como posso te ajudar</h2>

      <div className="options-my-work">
        <div className="option-my-work-item">
          <h3>Criação de sites</h3>
          <p>
            Desenvolvo sites completos, sempre pensando nos minimos detalhes
            visando a satisfação do cliente.
          </p>
        </div>
        <div className="option-my-work-item">
          <h3>Criação de Landing Pages</h3>
          <p>
            Desenvolvo Landing Pages capazes de trasnformar um navegador anônimo
            em um cliente fiel.
          </p>
        </div>
        <div className="option-my-work-item">
          <h3>Criação de API's rest</h3>
          <p>Desenvolvo API's Rest para integrar com sites ou sistemas.</p>
        </div>
      </div>

      <div className="contact-me-client">
        <h2>Contato</h2>
        <div className="contact-me-item">
          <a href="https://wa.me/5527992657127">
            <img src={whatssapImg} alt="" />
            <p>Fale comigo</p>
          </a>
        </div>
      </div>
    </section>
  );
}
