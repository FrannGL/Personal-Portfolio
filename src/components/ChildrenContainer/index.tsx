import styles from "./styles.module.scss";
import { useLayout } from "@/context/LayoutContext";

const ChildrenContainer = ({ children }: { children: React.ReactNode }) => {
	const { isOpen } = useLayout();

	return (
		<div
			className={
				isOpen ? `${styles.children_container}` : `${styles.children_container} ${styles.children_container_closed}`
			}
		>
			{children}
		</div>
	);
};

export default ChildrenContainer;
