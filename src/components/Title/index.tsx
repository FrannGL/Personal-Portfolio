import styles from "./styles.module.scss";

interface TitleProps {
	title: string;
}

const Title = ({ title }: TitleProps) => {
	return (
		<div className={styles.title_container}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};

export default Title;
