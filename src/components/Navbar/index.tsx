"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import LangDrop from "./LangDrop";
import logo from "/public/assets/nav-logo.png";
import BurgerMenuIcon from "../Icons/BurgerMenu";
import CloseIcon from "../Icons/Close";
import { LayoutProps } from "@/app/[locale]/(portfolio)/layout";

const Navbar = ({ isOpen, setIsOpen }: LayoutProps) => {
	const dict = useTranslations("dict.navbar");

	return (
		<nav className={styles.container}>
			<Link href='/'>
				<Image src={logo} alt='Small' className={styles.logo} width={150} height={60} priority />
			</Link>
			<LangDrop />
			{isOpen ? (
				<button className={styles.btn} onClick={() => setIsOpen(false)}>
					<CloseIcon />
				</button>
			) : (
				<button className={styles.btn} onClick={() => setIsOpen(true)}>
					<BurgerMenuIcon />
				</button>
			)}
		</nav>
	);
};

export default Navbar;
