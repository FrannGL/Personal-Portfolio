import Link from "next/link";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useLayout } from "@/context/LayoutContext";

interface ListRoutesProps {
	title: string;
	path: string;
}

const ListRoutes = () => {
	const { routeName, setRouteName, routes } = useLayout();

	const handleActiveRoute = (path: string) => {
		setRouteName(path);
	};

	return (
		<Fade>
			<ul className={styles.container}>
				{routes.map((route, index) => (
					<li key={index} className={styles.list}>
						<Link href={route.path} className={styles.link} onClick={() => handleActiveRoute(route.path)}>
							<p className={styles.title}>{route.title}</p>
							<div className={routeName === route.path ? styles.circle : `${styles.circle} ${styles.hidden}`}></div>
						</Link>
					</li>
				))}
			</ul>
		</Fade>
	);
};

export default ListRoutes;
