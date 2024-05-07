import Title from "@/components/Title";
import styles from "./styles.module.scss";
import CodeIcon from "@/components/Icons/Code";
import FlagIcon from "@/components/Icons/Flag";
import NotebookIcon from "@/components/Icons/Notebook";
import PencilIcon from "@/components/Icons/Pencil";
import SupportIcon from "@/components/Icons/Support";
import BagIcon from "@/components/Icons/Bag";
import Card from "@/components/Card";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

interface ServicesProps {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const dict = useTranslations("dict");

  const services: ServicesProps[] = [
    {
      id: 1,
      title: dict("services.title01"),
      description: dict("services.description01"),
      icon: <PencilIcon />,
    },
    {
      id: 2,
      title: dict("services.title02"),
      description: dict("services.description02"),
      icon: <FlagIcon />,
    },
    {
      id: 3,
      title: dict("services.title03"),
      description: dict("services.description03"),
      icon: <NotebookIcon />,
    },
    {
      id: 4,
      title: dict("services.title04"),
      description: dict("services.description04"),
      icon: <BagIcon />,
    },
    {
      id: 5,
      title: dict("services.title05"),
      description: dict("services.description05"),
      icon: <CodeIcon />,
    },
    {
      id: 6,
      title: dict("services.title06"),
      description: dict("services.description06"),
      icon: <SupportIcon />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Title title={dict("titles.services")} />
        <div className={styles.cards_container}>
          <Fade cascade damping={0.6} triggerOnce={true}>
            {services.map((service: ServicesProps) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="card_services"
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Services;
