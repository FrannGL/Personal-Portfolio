"use client";
import { Dispatch, SetStateAction } from "react";
import "@/styles/globals.scss";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export interface LayoutProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className={styles.inner_container}>
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
				<div
					className={
						isOpen ? `${styles.children_container}` : `${styles.children_container} ${styles.children_container_closed}`
					}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
