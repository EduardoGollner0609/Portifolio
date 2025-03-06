import '.styles.css';

type Props = {
    imgUrl: string;
    title: string;
    description: string;
    skills: string[];
}

export default function ProjectCard({ imgUrl, title, description, skills }: Props) {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={imgUrl} alt={`Foto do projeto ${title}`} />
            </div>
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
            </div>
        </div>
    );
}