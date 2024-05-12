"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import LangDrop from "./LangDrop";
import logo from "/public/assets/nav-logo.png";
import BurgerMenuIcon from "../Icons/BurgerMenu";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useLayout } from "@/context/LayoutContext";
import Card from "../Sidebar/Card";

const Navbar = () => {
	const { routes, activeRoute, setActiveRoute } = useLayout();
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav className={styles.container}>
			<Link href='/'>
				<Image src={logo} alt='logo' className={styles.logo} width={150} height={60} priority />
			</Link>
			<LangDrop />
			<Fade delay={200}>
				<button className={styles.btn} onClick={() => setOpen(!open)}>
					<BurgerMenuIcon />
				</button>
			</Fade>
			<ul
				className={`${styles.list_container} ${!open && styles.list_container_hidden}`}
				onClick={() => setOpen(false)}
			>
				{routes.map(card => (
					<Card
						key={card.title}
						title={card.title}
						path={card.path}
						icon={card.icon}
						isActive={activeRoute === card.path}
						setActive={setActiveRoute}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
