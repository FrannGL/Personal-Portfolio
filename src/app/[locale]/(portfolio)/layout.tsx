"use client";
import { LayoutProvider } from "@/context/LayoutContext";
import "@/styles/globals.scss";
import styles from "./styles.module.scss";
import Sidebar from "@/components/Sidebar";
import ChildrenContainer from "@/components/ChildrenContainer";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LayoutProvider>
			<div className={styles.container}>
				<ToastContainer
					position='bottom-right'
					limit={2}
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					transition={Slide}
				/>
				<div className={styles.inner_container}>
					<Sidebar />
					<ChildrenContainer>{children}</ChildrenContainer>
				</div>
			</div>
		</LayoutProvider>
	);
};

export default MainLayout;
