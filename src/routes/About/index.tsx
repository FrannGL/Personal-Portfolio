import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import { Fade } from "react-awesome-reveal";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";

const About = () => {
  const dict = useTranslations("dict");

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <Fade>
          <div className={styles.profile_container}>
            <Image
              src="/assets/profile.jpg"
              className={styles.profile}
              alt="Profile"
              width={500}
              height={700}
            />
            <div className={styles.border}></div>
          </div>
        </Fade>
        <div className={styles.about_container}>
          <Fade>
            <Title title="ABOUT ME" />
            <div className={styles.content}>
              <div className={styles.names}>
                <Fade direction="down" triggerOnce={true}>
                  <h3 className={styles.name}>{dict("about.title")}</h3>
                </Fade>
                <Fade direction="up" triggerOnce={true}>
                  <h4 className={styles.subname}>{dict("about.subtitle")}</h4>
                </Fade>
              </div>
              <Fade direction="up" triggerOnce={true}>
                <div className={styles.leyends}>
                  <p className={styles.leyend}>{dict("about.description01")}</p>
                  <p className={styles.leyend}>{dict("about.description02")}</p>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade delay={700} cascade damping={0.6} triggerOnce={true}>
            <ul className={styles.resume}>
              <li className={styles.item}>
                {dict("about.list01")}:
                <span className={styles.content}>Franco Galluccio</span>
              </li>
              <li className={styles.item}>
                {dict("about.list02")}:
                <span className={styles.content}>28</span>
              </li>
              <li className={styles.item}>
                {dict("about.list03")}:
                <span className={styles.content}>+54 9 11-2155-7802</span>
              </li>
              <li className={styles.item}>
                {dict("about.list04")}:
                <span className={styles.content}>Buenos Aires, Argentina</span>
              </li>
              <li className={styles.item}>
                {dict("about.list05")}:
                <span className={styles.content}>franngl.vercel.app</span>
              </li>
              <li className={styles.item}>
                {dict("about.list06")}:
                <span className={styles.content}>
                  francoivangalluccio@gmail.com
                </span>
              </li>
            </ul>
          </Fade>
          <Fade delay={4300} triggerOnce={true}>
            <div className={styles.btn_container}>
              <Link
                href={"assets/CV FRANCO IVAN GALLUCCIO.pdf"}
                target="_blank"
              >
                <Button title={dict("about.btn")} styleName="second" />
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
