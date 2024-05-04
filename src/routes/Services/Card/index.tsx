import styles from "./styles.module.scss";
import { ServicesProps } from "..";
import { Fade } from "react-awesome-reveal";

const Card = ({ title, description, icon }: ServicesProps) => {
	return (
		<Fade>
			<div className={styles.card}>
				<div className={styles.circle}>{icon}</div>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</Fade>
	);
};

export default Card;
