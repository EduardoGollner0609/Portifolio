import './styles.css';

type Props = {
    title: string;
}

export default function TopTitle({ title }: Props) {
    return (
        <div className="top-title">
            <div className="row-left"></div>
            <h3>{title}</h3>
            <div className="row-right"></div>
        </div>
    );
}