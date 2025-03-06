import './styles.css';
import githubIcon from '../../assets/github-min-icon.svg';
import openIcon from '../../assets/open-icon.svg';

type Props = {
    imgUrl: string;
    title: string;
    description: string;
    skills: string[];
    githubUrl: string;
    projectUrl: string;
}

export default function ProjectCard({ imgUrl, title, description, skills, githubUrl, projectUrl }: Props) {
    return (
        <div className="project-card">
            <a href={projectUrl}>
                <div className="project-card-img">
                    <img src={imgUrl} alt={`Foto do projeto ${title}`} />
                </div>
            </a>
            <div className="project-card-details">
                <h3>{title}</h3>
                <div className="project-card-details-description">
                    {description}
                </div>
                <div className="project-card-details-skills">
                    {
                        skills.map(skill => <p>{skill}</p>)
                    }
                </div>
                <div className="project-card-details-links">
                    <a href={githubUrl}>
                        <img src={githubIcon} alt="" />
                    </a>
                    <a href={projectUrl}>
                        <img src={openIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}