import { Project } from "..";
import styles from "./styles.module.scss";

interface CardProps {
	project: Project;
}

const Card = ({ project }: CardProps) => {
	return (
		<div className={styles.card}>
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		</div>
	);
};

export default Card;
