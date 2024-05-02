import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Card from "./Card";
import nextjsBadge from "/public/assets/badges/next.svg";
import typescriptBadge from "/public/assets/badges/typescript.svg";
import sassBadge from "/public/assets/badges/sass.svg";
import reduxBadge from "/public/assets/badges/redux.svg";
import { StaticImageData } from "next/image";
import { Fade } from "react-awesome-reveal";

export interface ResumeProps {
	title: string;
	company: string;
	dates: string;
	description: string;
	className: string;
	badges?: StaticImageData[];
}

export interface StacksProps {
	badges: StaticImageData[];
}

const Resume = () => {
	const resume: ResumeProps[] = [
		{
			title: "Desarrollador de Frontend",
			company: "Notimation",
			dates: "06/2023 - Actualidad",
			description:
				"Como Desarrollador de Frontend en Notimation, me desempeño en la creación de interfaces de usuario atractivas y funcionales, implementando componentes reutilizables e interacción con servidores para la gestión de datos a través de API. Además, he desarrollado soluciones personalizadas, colaborando con equipos multidisciplinarios para entregar productos de alta calidad.",
			className: "card_01",
			badges: [nextjsBadge, typescriptBadge, reduxBadge, sassBadge],
		},
		{
			title: "Experiencia 2",
			company: "N/A",
			dates: "--/-- - --/--",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
			className: "card_02",
		},
		{
			title: "Experiencia 3",
			company: "N/A",
			dates: "--/-- - --/--",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
			className: "card_03",
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<Title title='RESUME' />
				<div className={styles.cards_container}>
					<div className={styles.left}>
						<Fade delay={300} triggerOnce={true}>
							{resume[0] && <Card {...resume[0]} />}
						</Fade>
						<Fade delay={1100} triggerOnce={true}>
							{resume[2] && <Card {...resume[2]} />}
						</Fade>
					</div>
					<ul className={styles.timeline}>
						<li className={styles.point}></li>
						<li className={styles.point}></li>
						<li className={styles.point}></li>
					</ul>
					<div className={styles.right}>
						<Fade delay={700} triggerOnce={true}>
							{resume[1] && <Card {...resume[1]} />}
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
