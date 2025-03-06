import './styles.css';
import Header from '../../components/Header';
import myImg from '../../assets/my-img.webp';
import TopTitle from '../../components/TopTitle';
import ProjectCard from '../../components/ProjectCard';

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <section id="apresentation-section" className="container">
                    <div className="apresentation-details">
                        <p>Olá, tudo bem? eu me chamo </p>
                        <h2>Eduardo Sousa Gollner</h2>
                        <p>
                            Sou um desenvolvedor Full Stack com experiência em Java, Spring, React e SQL.
                            Apaixonado por tecnologia, sigo boas práticas como SOLID para criar aplicações escaláveis e de alta qualidade.
                            Tenho aprendizado rápido, trabalho bem em equipe e busco sempre soluções eficientes e inovadoras. 🚀
                        </p>
                        <div className="apresentation-btn-space">
                            <a href="" className="apresentation-btn mt20">
                                Conheça mais
                            </a>
                        </div>
                    </div>
                    <div className="apresentation-img">
                        <img src={myImg} alt="" />
                    </div>
                </section>
                <section id="projects-section" className="container">
                    <TopTitle title='Projetos' />
                    <div className="projects-list">
                        <ProjectCard
                            imgUrl={''}
                            title={''}
                            description={''}
                            skills={[]} />
                    </div>
                </section>
            </main>
        </>
    );
}