"use client";
import { LayoutProvider } from "@/context/LayoutContext";
import "@/styles/globals.scss";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChildrenContainer from "@/components/ChildrenContainer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LayoutProvider>
			<div className={styles.container}>
				<Navbar />
				<div className={styles.inner_container}>
					<Sidebar />
					<ChildrenContainer>{children}</ChildrenContainer>
				</div>
			</div>
		</LayoutProvider>
	);
};

export default MainLayout;
