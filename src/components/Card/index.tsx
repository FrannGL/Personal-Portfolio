import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import GlassIcon from "../Icons/Glass";
import RedirectIcon from "../Icons/Redirect";
import DateIcon from "../Icons/Date";
import { useLayout } from "@/context/LayoutContext";

interface CardProps {
	id?: number;
	title: string;
	description: string;
	icon?: JSX.Element;
	image?: StaticImageData;
	company?: string;
	dates?: string;
	badges?: StaticImageData[];
	certification?: string;
	category?: string;
	repository?: string;
	url?: string;
	className: string;
	overlay?: boolean;
}

const Card = ({
	title,
	description,
	icon,
	image,
	company,
	dates,
	badges,
	certification,
	category,
	repository,
	url,
	className,
	overlay = false,
}: CardProps) => {
	const { activeRoute } = useLayout();

	return (
		<Fade className={styles.fade}>
			<div className={styles[className]}>
				{image && <Image src={image} alt='Card Image' className={styles.image} />}
				{overlay && (
					<div className={styles.overlay}>
						<div className={styles.titles}>
							<h3 className={styles.title}>
								{title} | <span>{category}</span>
							</h3>
							<p className={styles.description}>{description}</p>
						</div>
						<div className={styles.btn_container}>
							<Link href={repository || ""} className={styles.link} target='_blank'>
								<GlassIcon />
							</Link>
							<Link href={url || ""} className={styles.link} target='_blank'>
								<RedirectIcon stroke='#16c0f0' />
							</Link>
						</div>
					</div>
				)}
				<div className={styles.content}>
					{activeRoute === "#contact" ? (
						<div className={styles.icon_container}>{icon}</div>
					) : (
						<div className={styles.circle}>{icon}</div>
					)}
					<div className={styles.bag}></div>
					<h3 className={styles.title}>
						{title} {company && <span> | {company}</span>}
					</h3>
					{dates && (
						<div className={styles.dates}>
							<DateIcon />
							<p className={styles.date}>{dates}</p>
						</div>
					)}
					<p className={styles.description}>{description}</p>

					{badges && (
						<div className={styles.badges}>
							{badges.map((badge, index) => (
								<Image key={index} src={badge} className={styles.badge} alt={`Badge ${index}`} />
							))}
						</div>
					)}

					{certification && (
						<Link href={certification} target='_blank' className={styles.link}>
							Ver Certificaciones
						</Link>
					)}
				</div>
			</div>
		</Fade>
	);
};

export default Card;
