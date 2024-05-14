import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface CategoriesProps {
	setFilter: (filter: string) => void;
}

const Categories = ({ setFilter }: CategoriesProps) => {
	const dict = useTranslations("dict.portfolio.categories");

	const handleCategoryClick = (category: string) => {
		setFilter(category);
	};

	return (
		<ul className={styles.list}>
			<li className={styles.item} onClick={() => handleCategoryClick("All")}>
				{dict("all")}
			</li>
			<li className={styles.item} onClick={() => handleCategoryClick("Frontend")}>
				{dict("frontend")}
			</li>
			<li className={styles.item} onClick={() => handleCategoryClick("Full Stack")}>
				{dict("full")}
			</li>
			<li className={styles.item} onClick={() => handleCategoryClick("Mobile")}>
				{dict("mobile")}
			</li>
		</ul>
	);
};

export default Categories;
