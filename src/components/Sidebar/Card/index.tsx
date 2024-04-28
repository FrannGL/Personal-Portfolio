import React from "react";
import styles from "./styles.module.scss";
import { Link } from "@/navigation";
import { SidebarProps } from "..";
import { useLayout } from "@/context/LayoutContext";

const Card = ({ title, path, icon }: SidebarProps) => {
	const { routeName, setRouteName } = useLayout();
	const isSelected = routeName === path;

	return (
		<Link
			className={
				isSelected
					? `${styles.container} ${styles.container_selected}`
					: `${styles.container} ${styles.container_noselected}`
			}
			href={path}
			title={title}
			onClick={() => setRouteName(path)}
		>
			{icon}
			<p className={styles.text}>{title}</p>
		</Link>
	);
};

export default Card;
