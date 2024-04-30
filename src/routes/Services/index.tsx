import Title from "@/components/Title";
import styles from "./styles.module.scss";
import CodeIcon from "@/components/Icons/Code";
import FlagIcon from "@/components/Icons/Flag";
import NotebookIcon from "@/components/Icons/Notebook";
import PencilIcon from "@/components/Icons/Pencil";
import SupportIcon from "@/components/Icons/Support";
import BagIcon from "@/components/Icons/Bag";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

export interface ServicesProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const Services = () => {
	const services: ServicesProps[] = [
		{
			title: "Creative Design",
			description:
				"Soluciones en base a diseños creativos. Transformo ideas en experiencias visuales cautivadoras, combinando innovación y estética para captar toda la atención del ciente.",
			icon: <PencilIcon />,
		},
		{
			title: "Branding",
			description:
				"Llevo a tu marca a nuevos niveles, creando identidades distintivas que reflejan la esencia del negocio, ayudándote a destacar y conectar con tu audiencia de manera auténtica.",
			icon: <FlagIcon />,
		},
		{
			title: "User interface",
			description:
				"Mejoro la interacción con interfaces de usuario elegantes y funcionales, diseñando experiencias intuitivas que facilitan la navegación, asegurando fluidez y atractivo.",
			icon: <NotebookIcon />,
		},
		{
			title: "User experience",
			description:
				"Ponga al usuario en el centro de todo lo que hago. Mi servicio de experiencia del usuario se enfoca en crear recorridos suaves y envolventes, que hagan que los usuarios se sientan valorados y comprendidos.",
			icon: <BagIcon />,
		},
		{
			title: "Clean code",
			description:
				"La calidad y la claridad son la base de mi código. Ofreciendo un servicio de código limpio, puedes confiar en soluciones robustas, seguras y escalables que impulsarán tu proyecto a largo plazo.",
			icon: <CodeIcon />,
		},
		{
			title: "Fast support",
			description:
				"El soporte rápido y eficiente está a solo un clic de distancia. Mi responsabilidad frente a posibles problemas técnicos asegura que siempre tengas el respaldo que necesitas para mantener el negocio en marcha.",
			icon: <SupportIcon />,
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<Title title='MY SERVICES' />
				<div className={styles.cards_container}>
					<Fade cascade damping={0.6} triggerOnce={true}>
						{services.map(service => (
							<Card service={service} key={service.title} />
						))}
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Services;
