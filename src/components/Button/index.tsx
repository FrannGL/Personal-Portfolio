import Image from "next/image";
import styles from "./styles.module.scss";

interface ButtonProps {
	onclick?: () => void;
	title: string;
	icon?: string;
	styleName?: string;
}

const Button = ({ title, icon, styleName, onclick }: ButtonProps) => {
	return (
		<button className={`${styleName ? styles[styleName] : ""}`} onClick={onclick}>
			{icon && <Image src={icon} width={30} height={25} alt='icon' />}
			{title}
		</button>
	);
};

export default Button;
