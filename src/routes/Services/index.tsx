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
import { useTranslations } from "next-intl";

export interface ServicesProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const dict = useTranslations("dict");

  const services: ServicesProps[] = [
    {
      title: dict("services.title01"),
      description: dict("services.description01"),
      icon: <PencilIcon />,
    },
    {
      title: dict("services.title02"),
      description: dict("services.description02"),
      icon: <FlagIcon />,
    },
    {
      title: dict("services.title03"),
      description: dict("services.description03"),
      icon: <NotebookIcon />,
    },
    {
      title: dict("services.title04"),
      description: dict("services.description04"),
      icon: <BagIcon />,
    },
    {
      title: dict("services.title05"),
      description: dict("services.description05"),
      icon: <CodeIcon />,
    },
    {
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
            {services.map((service) => (
              <Card {...service} key={service.title} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Services;
