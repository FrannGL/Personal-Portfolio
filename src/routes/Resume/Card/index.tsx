import styles from "./styles.module.scss";
import { ResumeProps } from "..";
import DateIcon from "@/components/Icons/Date";
import RedirectIcon from "@/components/Icons/Redirect";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Card = ({ title, dates, description, company, badges, certification }: ResumeProps) => {
	return (
		<Fade>
			<div className={styles.card}>
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
				{certification && (
					<Link href={certification} target='_blank' className={styles.link}>
						<RedirectIcon stroke='#c7c5c7' />
						Ver certificaciones
					</Link>
				)}
			</div>
		</Fade>
	);
};

export default Card;
