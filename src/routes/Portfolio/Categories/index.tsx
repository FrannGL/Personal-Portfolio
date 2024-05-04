import styles from "./styles.module.scss";

interface CategoriesProps {
	setFilter: (filter: string) => void;
}

const Categories = ({ setFilter }: CategoriesProps) => {
	const handleCategoryClick = (category: string) => {
		setFilter(category);
	};

	return (
		<ul className={styles.list}>
			<li className={styles.item} onClick={() => handleCategoryClick("All")}>
				All
			</li>
			<li className={styles.item} onClick={() => handleCategoryClick("Frontend")}>
				Frontend
			</li>
			<li className={styles.item} onClick={() => handleCategoryClick("Full Stack")}>
				Full Stack
			</li>
		</ul>
	);
};

export default Categories;
