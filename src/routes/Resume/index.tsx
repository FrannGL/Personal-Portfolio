import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Card from "./Card";
import nextjsBadge from "/public/assets/badges/next.svg";
import typescriptBadge from "/public/assets/badges/typescript.svg";
import sassBadge from "/public/assets/badges/sass.svg";
import reduxBadge from "/public/assets/badges/redux.svg";
import reactBadge from "/public/assets/badges/react.svg";
import expressBadge from "/public/assets/badges/express.svg";
import mongoBadge from "/public/assets/badges/mongo.svg";
import nodeBadge from "/public/assets/badges/node.svg";
import { StaticImageData } from "next/image";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

export interface ResumeProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  badges?: StaticImageData[];
  certification?: string;
}

export interface StacksProps {
  badges: StaticImageData[];
}

const Resume = () => {
  const dict = useTranslations("dict");

  const resume: ResumeProps[] = [
    {
      title: dict("resume.title01"),
      company: "Notimation",
      dates: "06/2023 - Actualidad",
      description: dict("resume.description01"),
      badges: [nextjsBadge, typescriptBadge, reduxBadge, sassBadge],
    },
    {
      title: dict("resume.title02"),
      company: "Coderhouse",
      dates: "08/2022 - 08/2023",
      description: dict("resume.description02"),
      badges: [reactBadge, nodeBadge, expressBadge, mongoBadge],
      certification:
        "https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/details/certifications/",
    },
    {
      title: dict("resume.title03"),
      company: "E.E.S N°2",
      dates: "03/2008 - 12/2013",
      description: dict("resume.description03"),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Title title={dict("titles.resume")} />
        <div className={styles.cards_container}>
          <div className={styles.left}>
            <Fade delay={300} triggerOnce={true}>
              {resume[0] && <Card {...resume[0]} />}
            </Fade>
            <Fade delay={1100} triggerOnce={true}>
              {resume[2] && <Card {...resume[2]} />}
            </Fade>
          </div>
          <ul className={styles.timeline}>
            <li className={styles.point}></li>
            <li className={styles.point}></li>
            <li className={styles.point}></li>
          </ul>
          <div className={styles.right}>
            <Fade delay={700} triggerOnce={true}>
              {resume[1] && <Card {...resume[1]} />}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
