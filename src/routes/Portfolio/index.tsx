import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Categories from "./Categories";
import { useState } from "react";
import Card from "./Card";

export interface Project {
	id: number;
	title: string;
	category: string;
	description: string;
}

const Resume = () => {
	const [filter, setFilter] = useState<string>("All");

	const projects: Project[] = [
		{
			id: 1,
			title: "E-commerce Website",
			category: "Full Stack",
			description: "Desarrollé un sitio de comercio electrónico con una pila completa usando React, Node.js y MongoDB.",
		},
		{
			id: 2,
			title: "Portfolio Personal",
			category: "Frontend",
			description: "Creé un portfolio personal para mostrar mis proyectos y habilidades utilizando Next.js y SCSS.",
		},
		{
			id: 3,
			title: "Aplicación de Tareas",
			category: "Frontend",
			description: "Desarrollé una aplicación de tareas simple utilizando React y Tailwind CSS.",
		},
		{
			id: 4,
			title: "Sistema de Gestión de Proyectos",
			category: "Full Stack",
			description: "Implementé un sistema de gestión de proyectos con autentificación y almacenamiento en la nube.",
		},
		{
			id: 5,
			title: "Landing Page para Startup",
			category: "Frontend",
			description:
				"Diseñé y desarrollé una landing page para una startup tecnológica con animaciones y efectos modernos.",
		},
		{
			id: 6,
			title: "API REST para Aplicación Móvil",
			category: "Full Stack",
			description: "Construí una API REST para una aplicación móvil usando Node.js y Express.",
		},
	];

	const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<Title title='PORTFOLIO' />
				<div className={styles.list_container}>
					<Categories setFilter={setFilter} />
				</div>
				<div className={styles.cards_container}>
					{filteredProjects.map(project => (
						<Card key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Resume;
