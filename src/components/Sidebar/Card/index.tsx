import React from "react";
import styles from "./styles.module.scss";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import { SidebarProps } from "..";

const Card = ({ title, path, icon }: SidebarProps) => {
	const pathname = usePathname();
	const shortPath = pathname.slice(3, pathname.length);
	const isSelected = shortPath === path || (shortPath === "" && path === "/");

	return (
		<Link
			className={
				isSelected
					? `${styles.container} ${styles.container_selected}`
					: `${styles.container} ${styles.container_noselected}`
			}
			href={path}
			title={title}
		>
			{icon}
			<p className={styles.text}>{title}</p>
		</Link>
	);
};

export default Card;
