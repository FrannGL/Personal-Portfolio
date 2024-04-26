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
import { useLayout } from "@/context/LayoutContext";

export interface SidebarProps {
	title: string;
	icon: JSX.Element;
	path: string;
}

const Sidebar = () => {
	const { isOpen } = useLayout();

	const sidebar: Array<SidebarProps> = [
		{
			title: `Home`,
			icon: <HomeIcon />,
			path: "#home",
		},
		{
			title: `About`,
			icon: <AboutIcon />,
			path: "#about",
		},
		{
			title: `Services`,
			icon: <ServicesIcon />,
			path: "#services",
		},
		{
			title: `Resume`,
			icon: <ResumeIcon />,
			path: "#resume",
		},
		{
			title: `Portfolio`,
			icon: <PortfolioIcon />,
			path: "#portfolio",
		},
		{
			title: `Contact`,
			icon: <ContactIcon />,
			path: "#contact",
		},
	];

	return (
		<section className={isOpen ? `${styles.container}` : `${styles.container} ${styles.container_closed}`}>
			<div className={styles.logo_container}>{isOpen && <Image className={styles.logo} src={logo} alt='Logo' />}</div>
			<div
				className={isOpen ? `${styles.cards_container}` : `${styles.cards_container} ${styles.cards_container_closed}`}
			>
				{sidebar.map(card => (
					<Card key={card.title} title={card.title} path={card.path} icon={card.icon} />
				))}
			</div>
		</section>
	);
};

export default Sidebar;
