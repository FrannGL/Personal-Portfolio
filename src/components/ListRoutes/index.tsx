import Link from "next/link";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

interface ListRoutesProps {
	title: string;
	path: string;
}

const ListRoutes = () => {
	const [routeName, setRouteName] = useState("#home");
	const routes: Array<ListRoutesProps> = [
		{
			title: `Home`,
			path: "#home",
		},
		{
			title: `About`,
			path: "#about",
		},
		{
			title: `Services`,
			path: "#services",
		},
		{
			title: `Resume`,
			path: "#resume",
		},
		{
			title: `Portfolio`,
			path: "#portfolio",
		},
		{
			title: `Contact`,
			path: "#contact",
		},
	];

	return (
		<Fade>
			<ul className={styles.container}>
				{routes.map((route, index) => (
					<li key={index} className={styles.list}>
						<Link href={route.path} className={styles.link} onClick={() => setRouteName(`${route.path}`)}>
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
