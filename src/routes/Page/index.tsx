import './styles.css';
import Header from '../../components/Header';
import myImg from '../../assets/my-img.webp';
import TopTitle from '../../components/TopTitle';
import ProjectCard from '../../components/ProjectCard';
import gcbarbershopProjectImg from '../../assets/gcbarbershop-project-img.png';
import rossowEngenhariaProjectImg from '../../assets/rossowengenharia-project-img.png';
import foodbridgeProjectImg from '../../assets/foodbridge-project-img.png';
import autoaluguelProjectImg from '../../assets/autoaluguel-project-img.png';
import stockmanagerProjectImg from '../../assets/stockmanager-project-img.png';
import my2Img from '../../assets/my-2-img.jpg';

export default function Page() {

    const landingPageSkills = ['HTML', 'CSS', 'React'];

    const siteSkills = ['React', 'Java', 'Spring', 'PostgreSQL'];

    const calculateAge = (birthDate: Date) => {
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let mounths = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            mounths--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (mounths < 0) {
            years--;
            mounths += 12;
        }

        return years;
    }

    const myAge: number = calculateAge(new Date('2005-09-06'));

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
                            <a href="#about-me-section" className="apresentation-btn mt20">
                                Conheça mais
                            </a>
                        </div>
                    </div>
                    <div className="apresentation-img">
                        <img src={myImg} alt="" />
                    </div>
                </section>
                <section id="about-me-section" className="container">
                    <TopTitle title='Sobre Mim' />
                    <div className="about-me-content">
                        <div className="about-me-img">
                            <img src={my2Img} alt="Animação Computador" />
                        </div>
                        <div className="about-me-details">
                            <p>
                                Prazer, me chamo <strong>Eduardo Sousa Gollner</strong>,
                                tenho {myAge} anos (nascido em 06/09/2005) e é um prazer tê-lo aqui. Se quiser saber mais sobre mim,
                                leia com atenção.
                            </p>
                            <br />
                            <p>
                                Sempre fui muito <strong>curioso</strong> e <strong>dedicado</strong>,
                                gostava de saber sobre tudo e principalmente assuntos que me interessavam.
                            </p>
                            <br />
                            <p>
                                Meu interesse por programação começou através do meu irmão,
                                que já atuava na área e me incentivou a seguir esse caminho.
                                Ao descobrir o poder de criar,
                                inovar e resolver problemas com a programação,
                                me apaixonei pela área. Comecei a investir em livros,
                                cursos e passei muitas noites estudando.
                                Hoje, sou um Desenvolvedor de Software Fullstack,
                                com maior foco no BackEnd, possuo certificados:
                                <ul className="about-me-details-certificates">
                                    <li>
                                        <a href="https://www.udemy.com/certificate/UC-1b17a043-9227-4675-9a9b-65912021c184/">
                                            Java Completo (UDEMY - 54.5 Horas)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://devsuperior.club/c/5-3053">
                                            Java Spring Professional (DevSuperior - 120 Horas)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://devsuperior.club/c/18-3053">
                                            ReactJS Professional (DevSuperior - 160 Horas)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.udemy.com/certificate/UC-b5f6e750-1276-44ad-b4da-a92dc4113594/">
                                            Spring Boot Expert: Jpa, REST, JWT, Oauth2 com Docker e AWS (UDEMY - 52 Horas)
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
                <section id="projects-section" className="container">
                    <TopTitle title='Projetos' />
                    <div className="projects-list">
                        <ProjectCard
                            imgUrl={foodbridgeProjectImg}
                            title='FoodBridge'
                            description='Site para doação de alimentos.'
                            skills={siteSkills}
                            githubUrl='https://github.com/EduardoGollner0609/FoodBridge'
                            projectUrl='https://foodbridge-oficial.vercel.app/' />
                        <ProjectCard
                            imgUrl={autoaluguelProjectImg}
                            title='AutoAluguel'
                            description='Site para aluguel de automóveis.'
                            skills={siteSkills}
                            githubUrl='https://github.com/EduardoGollner0609/AutoAluguel'
                            projectUrl='https://autoaluguel.vercel.app/' />
                        <ProjectCard
                            imgUrl={stockmanagerProjectImg}
                            title='Stock Manager'
                            description='Aplicação Desktop para controle de estoque.'
                            skills={['Java', 'JDBC', 'MySQL', 'JavaFX']}
                            githubUrl='https://github.com/EduardoGollner0609/StockManager'
                            projectUrl='https://github.com/EduardoGollner0609/StockManager' />
                        <ProjectCard
                            imgUrl={gcbarbershopProjectImg}
                            title='Gc Barber Shop'
                            description='Landing page desenvolvida para uma barbearia chamada GCBarberShop'
                            skills={landingPageSkills}
                            githubUrl='https://github.com/EduardoGollner0609/GCBarberShop'
                            projectUrl='https://gcbarbershop.netlify.app/' />
                        <ProjectCard
                            imgUrl={rossowEngenhariaProjectImg}
                            title='Rossow Engenharia'
                            description='Landing page desenvolvida para uma empresa de engenharia chamada Rossow Engenharia'
                            skills={landingPageSkills}
                            githubUrl='https://github.com/EduardoGollner0609/RossowEngenharia'
                            projectUrl='https://rossow-engenharia.netlify.app/' />
                    </div>
                </section>
            </main >
        </>
    );
}