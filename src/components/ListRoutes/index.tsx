import Link from "next/link";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import { usePathname } from "next/navigation";

interface ListRoutesProps {
	title: string;
	path: string;
}

const ListRoutes = () => {
	const routes: Array<ListRoutesProps> = [
		{
			title: `Home`,
			path: "/",
		},
		{
			title: `About`,
			path: "/#about",
		},
		{
			title: `Services`,
			path: "/#services",
		},
		{
			title: `Resume`,
			path: "/#resume",
		},
		{
			title: `Portfolio`,
			path: "/#portfolio",
		},
		{
			title: `Contact`,
			path: "/#contact",
		},
	];

	const pathname = usePathname();
	const onlyPathname = pathname.slice(0, -2);

	return (
		<Fade>
			<ul className={styles.container}>
				{routes.map((route, index) => (
					<li key={index} className={styles.list}>
						<Link href={route.path} className={styles.link}>
							<p className={styles.title}>{route.title}</p>
							<div className={onlyPathname === route.path ? styles.circle : `${styles.circle} ${styles.hidden}`}></div>
						</Link>
					</li>
				))}
			</ul>
		</Fade>
	);
};

export default ListRoutes;
