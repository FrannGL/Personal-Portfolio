import Image from "next/image";
import styles from "./styles.module.scss";
import { Oval } from "react-loader-spinner";
import { useTranslations } from "next-intl";

interface ButtonProps {
	onclick?: () => void;
	title: string;
	icon?: string;
	styleName?: string;
	loading?: boolean;
}

const Button = ({ title, icon, styleName, onclick, loading }: ButtonProps) => {
	const dict = useTranslations("dict.contact.form");

	return (
		<button className={`${styleName ? styles[styleName] : ""}`} onClick={onclick}>
			{loading ? (
				<>
					<Oval
						height={25}
						width={25}
						color='#16c0f0'
						wrapperStyle={{}}
						wrapperClass=''
						visible={true}
						ariaLabel='oval-loading'
						secondaryColor='#2b3d4f'
						strokeWidth={2}
						strokeWidthSecondary={2}
					/>
					{dict("loading")}
				</>
			) : (
				<>
					{icon && <Image src={icon} width={30} height={25} alt='icon' />}
					{title}
				</>
			)}
		</button>
	);
};

export default Button;
