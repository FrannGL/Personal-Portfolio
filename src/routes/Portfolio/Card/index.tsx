import Image from "next/image";
import { Project } from "..";
import styles from "./styles.module.scss";
import GlassIcon from "@/components/Icons/Glass";
import RedirectIcon from "@/components/Icons/Redirect";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface CardProps {
	project: Project;
}

const Card = ({ project }: CardProps) => {
	return (
		<Fade>
			<div className={styles.card}>
				<Image src={project.image} className={styles.image} alt='Preview' />
				<div className={styles.overlay}>
					<div className={styles.titles}>
						<h3 className={styles.title}>
							{project.title} | <span>{project.category}</span>
						</h3>
						<p className={styles.description}>{project.description}</p>
					</div>
					<div className={styles.btn_container}>
						<Link href={project.repository} className={styles.link} target='_blank'>
							<GlassIcon />
						</Link>
						<Link href={project.url} className={styles.link} target='_blank'>
							<RedirectIcon stroke='#16c0f0' />
						</Link>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Card;
