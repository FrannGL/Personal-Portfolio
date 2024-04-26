"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import LangDrop from "./LangDrop";
import logo from "/public/assets/nav-logo.png";
import BurgerMenuIcon from "../Icons/BurgerMenu";
import CloseIcon from "../Icons/Close";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useLayout } from "@/context/LayoutContext";

const Navbar = () => {
	const { isOpen, setIsOpen } = useLayout();
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
		<nav className={isOpen ? styles.container : `${styles.container} ${styles.container_closed}`}>
			<Link href='/'>
				<Image src={logo} alt='logo' className={styles.logo} width={150} height={60} priority />
			</Link>
			<LangDrop />
			<Fade key={isVisible.toString()} direction='right' delay={200}>
				<button className={styles.btn} onClick={toggleMenu}>
					{isOpen ? <CloseIcon /> : <BurgerMenuIcon />}
				</button>
			</Fade>
		</nav>
	);
};

export default Navbar;
