import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Barlow } from "next/font/google";
import "@/styles/globals.scss";

const barlow = Barlow({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const NotFoundHandler = () => {
	return (
		<html>
			<body className={barlow.className}>
				<div className={styles.container}>
					<h1>Oops! Page not found</h1>
					<Link href={"/"} className={styles.btn}>
						Go Back
					</Link>
				</div>
			</body>
		</html>
	);
};

export default NotFoundHandler;
