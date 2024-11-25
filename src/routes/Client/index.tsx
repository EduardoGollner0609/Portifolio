import "./styles.css";
import whatssapImg from "../../assets/whatsapp-icon.svg";
import Projects from "../Projects";

export default function Client() {
  return (
    <>
      <section id="section-client">
        <h2>Como posso te ajudar</h2>

        <div className="options-my-work">
          <div className="option-my-work-item">
            <h3>Sites</h3>
            <p>
              Desenvolvo sites completos, sempre pensando nos minimos detalhes
              visando a satisfação do cliente.
            </p>
          </div>
          <div className="option-my-work-item">
            <h3>Landing Pages</h3>
            <p>
              Desenvolvo Landing Pages capazes de trasnformar um navegador anônimo
              em um cliente fiel.
            </p>
          </div>
          <div className="option-my-work-item">
            <h3>API's rest</h3>
            <p>Desenvolvo API's Rest para integrar com sites ou sistemas.</p>
          </div>
        </div>
      </section>
      <Projects />


    </>
  );
}
