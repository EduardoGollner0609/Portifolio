import './styles.css';
import myPhoto from '../../../assets/my-photo.webp';

export default function HomePage() {
    return (
        <main>
            <section id="home-page-section" className="container">
                <div className="home-page-apresentation">
                    <p>Olá, meu nome é</p>
                    <h2>Eduardo S. Gollner</h2>
                    <p>Sou um desenvolvedor Full Stack especializado em Java com Spring e TypeScript com React.
                        Sou apaixonado por aprendizado contínuo e estou sempre me desafiando para evoluir e aprimorar minhas habilidades.
                    </p>
                    <a href="">
                        Conhecer Mais
                    </a>
                </div>
                <div className="home-page-photo">
                    <img src={myPhoto} alt="" />
                </div>
            </section>
        </main>
    );
}