import styles from "./styles.module.scss";
import { ResumeProps } from "..";
import DateIcon from "@/components/Icons/Date";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Card = ({ title, dates, description, company, className, badges }: ResumeProps) => {
	return (
		<Fade>
			<div className={styles[className]}>
				<div className={styles.bag}></div>
				<h3 className={styles.title}>
					{title} <span> | {company}</span>
				</h3>
				<div className={styles.dates}>
					<DateIcon />
					<p className={styles.date}>{dates}</p>
				</div>
				<p className={styles.description}>{description}</p>
				{badges && (
					<div className={styles.stack}>
						<p>Stack:</p>
						{badges.map((badge, index) => (
							<Image key={index} src={badge} className={styles.badge} alt={`Badge ${index}`} />
						))}
					</div>
				)}
			</div>
		</Fade>
	);
};

export default Card;
