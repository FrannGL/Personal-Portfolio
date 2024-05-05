import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface InputProps {
	name: string;
	value: string;
	label: string;
	type: string;
	placeholder: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	className?: string;
}

const Input = ({ label, name, type, value, onChange, placeholder, className }: InputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	const classes = className ? `${styles[className]} ${styles.input}` : styles.input;

	return (
		<label className={styles.label}>
			{label}
			{type === "textarea" ? (
				<textarea
					className={styles.textarea}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={handleChange}
				/>
			) : (
				<input
					type={type}
					className={classes}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
				/>
			)}
		</label>
	);
};

export default Input;
