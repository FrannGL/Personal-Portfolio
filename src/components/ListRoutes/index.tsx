import Link from "next/link";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useLayout } from "@/context/LayoutContext";

interface ListRoutesProps {
	currentSection: string;
	setCurrentSection: (section: string) => void;
}

const ListRoutes = ({ currentSection, setCurrentSection }: ListRoutesProps) => {
	const { routes } = useLayout();

	const handleActiveRoute = (path: string) => {
		setCurrentSection(path);
	};

	return (
		<Fade>
			<ul className={styles.container}>
				{routes.map((route, index) => (
					<li key={index} className={styles.list}>
						<Link href={route.path} className={styles.link} onClick={() => handleActiveRoute(route.path)}>
							<p className={styles.title}>{route.title}</p>
							<div
								className={
									`#${currentSection}` === route.path || currentSection === route.path
										? styles.circle
										: `${styles.circle} ${styles.hidden}`
								}
							></div>
						</Link>
					</li>
				))}
			</ul>
		</Fade>
	);
};

export default ListRoutes;
