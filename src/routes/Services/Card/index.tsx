import styles from "./styles.module.scss";
import { ServicesProps } from "..";
import { Fade } from "react-awesome-reveal";

interface CardProps {
	service: ServicesProps;
}

const Card = ({ service }: CardProps) => {
	return (
		<Fade>
			<div className={styles.card}>
				<div className={styles.circle}>{service.icon}</div>
				<h3 className={styles.title}>{service.title}</h3>
				<p className={styles.description}>{service.description}</p>
			</div>
		</Fade>
	);
};

export default Card;
