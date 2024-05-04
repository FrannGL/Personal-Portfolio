import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Card from "./Card";
import nextjsBadge from "/public/assets/badges/next.svg";
import typescriptBadge from "/public/assets/badges/typescript.svg";
import sassBadge from "/public/assets/badges/sass.svg";
import reduxBadge from "/public/assets/badges/redux.svg";
import reactBadge from "/public/assets/badges/react.svg";
import expressBadge from "/public/assets/badges/express.svg";
import mongoBadge from "/public/assets/badges/mongo.svg";
import nodeBadge from "/public/assets/badges/node.svg";
import { StaticImageData } from "next/image";
import { Fade } from "react-awesome-reveal";

export interface ResumeProps {
	title: string;
	company: string;
	dates: string;
	description: string;
	badges?: StaticImageData[];
	certification?: string;
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
			badges: [nextjsBadge, typescriptBadge, reduxBadge, sassBadge],
		},
		{
			title: "Carrera de Desarrollo Full Stack",
			company: "Coderhouse",
			dates: "08/2022 - 08/2023",
			description:
				"Mi camino para convertirme en desarrollador Full Stack, donde me embarque en un emocionante viaje de aprendizaje con la pila de tecnologías MERN: MongoDB, Express.js, React y Node.js. A lo largo de mi cursada, también te familiarize con herramientas complementarias como Git para el control de versiones, Docker para la contenedorización, y tecnologías relacionadas con la nube para desplegar tus aplicaciones. El aprendizaje no solo fue técnico, sino también colaborativo, permitiéndome trabajar en proyectos en equipo, practicar metodologías ágiles y recibir feedback constructivo.",
			badges: [reactBadge, nodeBadge, expressBadge, mongoBadge],
			certification: "https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/details/certifications/",
		},
		{
			title: "Bachiller en Ciencias Naturales",
			company: "E.E.S N°2",
			dates: "03/2008 - 12/2013",
			description:
				"Durante mi tiempo en la secundaria, donde cursé el bachillerato en ciencias naturales, tuve la oportunidad de sumergirme en un mundo fascinante de descubrimientos y aprendizajes. Este enfoque educativo me permitió explorar temas relacionados con la biología, la química y la física, ampliando mis conocimientos sobre el funcionamiento del mundo natural y sus fenómenos.",
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
