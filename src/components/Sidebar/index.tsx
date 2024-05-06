import styles from "./styles.module.scss";
import logo from "/public/assets/logo.png";
import ResumeIcon from "../Icons/Resume";
import AboutIcon from "../Icons/About";
import ContactIcon from "../Icons/Contact";
import HomeIcon from "../Icons/Home";
import PortfolioIcon from "../Icons/Portfolio";
import ServicesIcon from "../Icons/Services";
import Card from "./Card";
import Image from "next/image";
import LangDrop from "../Navbar/LangDrop";
import { useLayout } from "@/context/LayoutContext";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export interface SidebarProps {
	title: string;
	icon: JSX.Element;
	path: string;
}

const Sidebar = () => {
	const { isOpen, setIsOpen, routes } = useLayout();
	const [isVisible, setIsVisible] = useState(false);

	const toggleMenu = () => {
		setIsVisible(!isVisible);
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<section className={isOpen ? `${styles.container}` : `${styles.container} ${styles.container_closed}`}>
			<Fade key={isVisible.toString()} delay={200}>
				<button className={styles.btn} onClick={toggleMenu}>
					{isOpen ? <ArrowLeft /> : <ArrowRight />}
				</button>
			</Fade>
			<div className={styles.logo_container}>{isOpen && <Image className={styles.logo} src={logo} alt='Logo' />}</div>
			<div
				className={isOpen ? `${styles.cards_container}` : `${styles.cards_container} ${styles.cards_container_closed}`}
			>
				{routes.map(card => (
					<Card key={card.title} title={card.title} path={card.path} icon={card.icon} />
				))}
			</div>
			<LangDrop />
		</section>
	);
};

export default Sidebar;
