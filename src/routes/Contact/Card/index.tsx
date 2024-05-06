import Link from "next/link";
import { Resume } from "..";
import styles from "./styles.module.scss";

interface CardProps {
	resume: Resume;
}

const Card = ({ resume }: CardProps) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{resume.title}</h3>
			{resume.description.includes("mail") ? (
				<Link href={`mailto:${resume.description}`} className={styles.link}>
					{resume.description}
				</Link>
			) : resume.description.includes("vercel") ? (
				<Link href={`https://${resume.description}`} target='_blank' className={styles.link}>
					{resume.description}
				</Link>
			) : (
				<p className={styles.description}>{resume.description}</p>
			)}
			<div className={styles.icon_container}>{resume.icon}</div>
		</div>
	);
};

export default Card;
