import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import useTypewriter from "react-typewriter-hook";
import Button from "@/components/Button";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const titles = ["Frontend Developer.", "Backend Developer.", "Fullstack Developer."];
const initialWord = "I am a";
const Words = titles.map(title => `${initialWord} ${title}`);

const HomePage = () => {
	const [magicName, setMagicName] = useState(Words[0]);
	const [index, setIndex] = useState(0);

	const intervalRef = useRef<any>(null);
	const name = useTypewriter(magicName);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setIndex(prevIndex => (prevIndex >= Words.length - 1 ? 0 : prevIndex + 1));
			setMagicName(Words[index]);
		}, 6000);
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [index]);

	const firstPart = name?.slice(0, 6);
	const secondPart = name?.slice(6);

	return (
		<section className={styles.container}>
			<Fade delay={200}>
				<div className={styles.names}>
					<h1 className={styles.title}>Franco Galluccio</h1>
					<Fade cascade delay={200}>
						<h2 className={styles.subtitle}>
							<span className={styles.initial}>{firstPart}</span>
							<span className={styles.content}>{secondPart}</span>
						</h2>
					</Fade>
				</div>
			</Fade>
			<div className={styles.btn_container}>
				<Link href={"https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/"} target='_blank'>
					<Button title='Hire me' styleName='main' />
				</Link>
				<Link href={"assets/CV FRANCO IVAN GALLUCCIO.pdf"} target='_blank'>
					<Button title='Download CV' styleName='second' />
				</Link>
			</div>
		</section>
	);
};

export default HomePage;
