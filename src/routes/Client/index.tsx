import "./styles.css";
import whatssapImg from "../../assets/whatsapp-icon.svg";
import Projects from "../Projects";
import clockIcon from '../../assets/clock-icon.svg';
import heartIcon from '../../assets/heart-icon.svg';
import moneyIcon from '../../assets/money-icon.svg';

export default function Client() {
  return (
    <>
      <section id="section-client">
        <h2>Como posso te ajudar</h2>

        <div className="options-my-work">
          <a href="https://wa.me/5527992657127?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20para%20desenvolver%20um%20site.">
            <div className="option-my-work-item">

              <h3>Sites</h3>
              <p>
                Desenvolvo sites completos, sempre pensando nos minimos detalhes
                visando a satisfação do cliente.
              </p>
            </div>
          </a>
          <a href="https://wa.me/5527992657127?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20para%20desenvolver%20uma%20landing%20page.">
            <div className="option-my-work-item">
              <h3>Landing Pages</h3>
              <p>
                Desenvolvo Landing Pages capazes de trasnformar um navegador anônimo
                em um cliente fiel.
              </p>
            </div>
          </a>

          <a href="https://wa.me/5527992657127?text=Olá,%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orçamento%20para%20desenvolver%20uma%20API%20rest.">
            <div className="option-my-work-item">
              <h3>API's rest</h3>
              <p>Desenvolvo API's Rest para integrar com sites ou sistemas.</p>
            </div>
          </a>
        </div>
      </section>
      <Projects />
      <section id="section-benefits-of-hiring-me">
        <h2>Por que me contratar</h2>

        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Ótimo Preço</h3>
            <img src={moneyIcon} alt="" />
            <p>Ofereço meus serviços com muita qualidade e com um preço que cabe dentro do seu bolso.</p>
          </div>
          <div className="benefit-item">
            <h3>Carinho</h3>
            <img src={heartIcon} alt="" />
            <p>Meus serviços são feitos com muito carinho, pois amo aquilo que faço.</p>
          </div>
          <div className="benefit-item">
            <h3>Prazo</h3>
            <img src={clockIcon} alt="" />
            <p>Serviços com prazo de entrega e entrega sempre dentro dos prazos</p>
          </div>
        </div>
        <div className="contact-me-item">
          <a href="https://wa.me/5527992657127">
            <img src={whatssapImg} alt="" />
            <p>Fale comigo</p>
          </a>
        </div>
      </section >
    </>
  );
}
