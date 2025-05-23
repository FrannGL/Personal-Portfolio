import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Categories from "./Categories";
import { useState } from "react";
// import Card from "./Card";
import Card from "@/components/Card";
import { StaticImageData } from "next/image";
import juguetes_perdidos_preview from "/public/assets/juguetes-perdidos.png";
import maular_preview from "/public/assets/Maular.png";
import notimation_preview from "/public/assets/Notimation.png";
import fuego_burgers_preview from "/public/assets/Fuego-burgers.png";
import thoms_coffe_preview from "/public/assets/thoms-coffe.png";
import backoffice_preview from "/public/assets/backoffice.png";
import helpdesk_preview from "/public/assets/helpdesk.png";
import chapas_qr_preview from "/public/assets/Chapas-qr.png";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: StaticImageData;
  repository: string;
  url: string;
}

const Resume = () => {
  const [filter, setFilter] = useState<string>("All");
  const dict = useTranslations("dict");

  const projects: Project[] = [
    {
      id: 1,
      title: "Juguetes Perdidos Beer",
      description: dict("portfolio.projects.description01"),
      category: "Frontend",
      image: juguetes_perdidos_preview,
      repository: "https://github.com/FrannGL/Juguetes-Perdidos-BEER",
      url: "https://juguetes-perdidos.vercel.app/",
    },
    {
      id: 2,
      title: "Maular",
      description: dict("portfolio.projects.description02"),
      category: "Frontend",
      image: maular_preview,
      repository: "https://github.com/FrannGL?tab=repositories",
      url: "https://www.maular.com/",
    },
    {
      id: 3,
      title: "Notimation",
      description: dict("portfolio.projects.description03"),
      category: "Frontend",
      image: notimation_preview,
      repository: "https://github.com/FrannGL?tab=repositories",
      url: "https://notimation.com/es",
    },
    {
      id: 4,
      title: "Fuego Burgers",
      description: dict("portfolio.projects.description04"),
      category: "Full Stack",
      image: fuego_burgers_preview,
      repository: "https://github.com/FrannGL/Fuego-Burgers",
      url: "https://fuego-burgers.onrender.com/",
    },
    {
      id: 5,
      title: "Chapas QR",
      description: dict("portfolio.projects.description05"),
      category: "Full Stack",
      image: chapas_qr_preview,
      repository: "https://github.com/FrannGL/Chapas-qr-frontend",
      url: "https://chapas-qr.vercel.app/",
    },
    {
      id: 6,
      title: "Thom's Coffe",
      description: dict("portfolio.projects.description06"),
      category: "Mobile",
      image: thoms_coffe_preview,
      repository: "https://github.com/FrannGL/thoms-coffe",
      url: "https://github.com/FrannGL/thoms-coffe",
    },
    {
      id: 7,
      title: "Finanex",
      description: dict("portfolio.projects.description07"),
      category: "Frontend",
      image: backoffice_preview,
      repository: "https://github.com/FrannGL",
      url: "https://staging.backoffice.finanex.io/auth",
    },
    {
      id: 8,
      title: "OT Helpdesk",
      description: dict("portfolio.projects.description08"),
      category: "Frontend",
      image: helpdesk_preview,
      repository: "https://github.com/FrannGL/front-jst-ot-helpdesk",
      url: "https://front-jst-ot-helpdesk.vercel.app",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className={styles.container}>
      <Fade>
        <div className={styles.inner_container}>
          <Title title={dict("titles.portfolio")} />
          <div className={styles.list_container}>
            <Categories setFilter={setFilter} />
          </div>
          <div className={styles.cards_container}>
            <Fade cascade damping={0.3} triggerOnce={true}>
              {filteredProjects.map((project: Project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  image={project.image}
                  repository={project.repository}
                  url={project.url}
                  className="card_portfolio"
                  overlay
                />
              ))}
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Resume;
