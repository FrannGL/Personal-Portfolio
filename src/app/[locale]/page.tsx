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

const sections = ["home", "about", "services", "resume", "portfolio", "contact"];
export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			event.preventDefault();
			if (event.deltaY > 0) {
				if (currentIndex < sections.length - 1) {
					setCurrentIndex(currentIndex + 1);
				}
			} else {
				if (currentIndex > 0) {
					setCurrentIndex(currentIndex - 1);
				}
			}
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

	return (
		<MainLayout>
			{sections.map(section => (
				<div className={styles.container} id={section} key={section}>
					{section === "home" && <HomePage />}
					{section === "about" && <About />}
					{section === "services" && <Services />}
					{section === "resume" && <Resume />}
					{section === "portfolio" && <Portfolio />}
					{section === "contact" && <Contact />}
				</div>
			))}
		</MainLayout>
	);
}
