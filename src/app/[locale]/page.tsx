"use client";
import styles from "./styles.module.scss";
import MainLayout from "./(portfolio)/layout";
import HomePage from "@/routes/Home";
import About from "@/routes/About";
import Services from "@/routes/Services";
import Resume from "@/routes/Resume";
import Portfolio from "@/routes/Portfolio";
import Contact from "@/routes/Contact";
import { useEffect, useState } from "react";
import ListRoutes from "@/components/ListRoutes";

const sections = ["home", "about", "services", "resume", "portfolio", "contact"];
export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentSection, setCurrentSection] = useState(sections[0]);

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			event.preventDefault();
			const direction = event.deltaY > 0 ? 1 : -1;
			const newIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);
			setCurrentIndex(newIndex);
		};

		window.addEventListener("wheel", handleWheel, { passive: false });

		const targetElement = document.getElementById(sections[currentIndex]);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}

		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, [currentIndex]);

	useEffect(() => {
		const newSection = sections[currentIndex];
		setCurrentSection(newSection);
	}, [currentIndex]);

	return (
		<MainLayout>
			{sections.map((section, index) => (
				<div className={styles.container} id={section} key={`${section}-${index}`}>
					{section === "home" && <HomePage />}
					{section === "about" && <About />}
					{section === "services" && <Services />}
					{section === "resume" && <Resume />}
					{section === "portfolio" && <Portfolio />}
					{section === "contact" && <Contact />}
				</div>
			))}
			<div className={styles.list}>
				<ListRoutes currentSection={currentSection} setCurrentSection={setCurrentSection} />
			</div>
		</MainLayout>
	);
}
