import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Categories from "./Categories";
import { useState } from "react";
import Card from "./Card";
import { StaticImageData } from "next/image";
import juguetes_perdidos_preview from "/public/assets/juguetes-perdidos.png";
import maular_preview from "/public/assets/Maular.png";
import notimation_preview from "/public/assets/Notimation.png";
import fuego_burgers_preview from "/public/assets/Fuego-burgers.png";
import imperio_shoes_preview from "/public/assets/imperio-shoes.png";
import chapas_qr_preview from "/public/assets/Chapas-qr.png";
import { Fade } from "react-awesome-reveal";

export interface Project {
	id: number;
	title: string;
	description: string;
	category: string;
	image: StaticImageData;
	repository: string;
	url: string;
}

const Resume = () => {
	const [filter, setFilter] = useState<string>("All");

	const projects: Project[] = [
		{
			id: 1,
			title: "Juguetes Perdidos Beer",
			description:
				"Tienda en línea para una cervecería, creada con React. Incluye navegación por rutas, gestión de estados globales con Context, estilos personalizados con Material UI y adaptable a todas las pantallas. El diseño limpio y funcional permite a los clientes explorar y comprar cervezas artesanales con facilidad.",
			category: "Frontend",
			image: juguetes_perdidos_preview,
			repository: "https://github.com/FrannGL/Juguetes-Perdidos-BEER",
			url: "https://juguetes-perdidos.vercel.app/",
		},
		{
			id: 2,
			title: "Maular",
			description:
				"Landing Page institucional, creada con Next.js. Se basa en un elegante diseño de Figma adaptable a todas las pantallas, utilizando el preprocesador SASS para estilizar de forma dinámica. La página ofrece una experiencia fluida y atractiva, reflejando la imagen profesional de la empresa.",
			category: "Frontend",
			image: maular_preview,
			repository: "https://github.com/FrannGL?tab=repositories",
			url: "https://www.maular.com/",
		},
		{
			id: 3,
			title: "Notimation",
			description:
				"Landing Page institucional, desarrollada con Next.js y Typescript para mayor robustez. El diseño sigue un modelo de Figma y utiliza SASS para estilos personalizados. Esta página presenta un flujo interactivo y muestra de forma clara los beneficios del servicio.",
			category: "Frontend",
			image: notimation_preview,
			repository: "https://github.com/FrannGL?tab=repositories",
			url: "https://notimation.com/es",
		},
		{
			id: 4,
			title: "Fuego Burgers",
			description:
				"Plataforma de e-commerce para una cadena de hamburguesas, desarrollada con un enfoque Full Stack. Administración de usuarios y roles, productos, carritos y otras funcionalidades son parte de este proyecto. El backend utiliza Express.js y MongoDB, mientras que el frontend emplea Handlebars para un diseño dinámico. Especial énfasis en la arquitectura de capas, que garantiza un código seguro y eficiente.",
			category: "Full Stack",
			image: fuego_burgers_preview,
			repository: "https://github.com/FrannGL/Fuego-Burgers",
			url: "https://fuego-burgers.onrender.com/",
		},
		{
			id: 5,
			title: "Imperio Shoes",
			description:
				"Tienda en línea de indumentaria, creada en colaboración con otro desarrollador. La misma permite navegar entre las distintas categorías, administrar usuarios, agregar productos a favoritos, crear un carrito de compras, entre otras. Backend construído con Express.js y MongoDB, mientras que el frontend usa React y Vite para una respuesta rápida. El proyecto destaca por su coordinación y trabajo en equipo.",
			category: "Full Stack",
			image: imperio_shoes_preview,
			repository: "https://github.com/gszcode/E-commerce-Client",
			url: "https://imperio-shoes.vercel.app/",
		},
		{
			id: 6,
			title: "Chapas QR",
			description:
				"Proyecto tipo CRM para gestionar usuarios y códigos QR relacionados con datos de mascotas, donde el cliente va a poder impirmir en una chapa el código QR y al escanearlo lo redirige a una landing page con los datos referentes a su mascota. El frontend usa Next.js, Typescript y SASS para un diseño moderno, mientras que el backend se basa en Express.js y MongoDB, siguiendo una arquitectura de capas para mayor seguridad y eficiencia.",
			category: "Full Stack",
			image: chapas_qr_preview,
			repository: "https://github.com/FrannGL/Chapas-qr-frontend",
			url: "https://chapas-qr.vercel.app/",
		},
	];

	const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

	return (
		<div className={styles.container}>
			<Fade>
				<div className={styles.inner_container}>
					<Title title='PORTFOLIO' />
					<div className={styles.list_container}>
						<Categories setFilter={setFilter} />
					</div>
					<div className={styles.cards_container}>
						<Fade cascade damping={0.3} triggerOnce={true}>
							{filteredProjects.map(project => (
								<Card key={project.id} project={project} />
							))}
						</Fade>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Resume;
