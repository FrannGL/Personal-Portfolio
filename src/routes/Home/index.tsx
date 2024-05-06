import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
import Typed from "typed.js";
import { Fade } from "react-awesome-reveal";
import LinkedinIcon from "@/components/Icons/Linkedin";
import FacebookIcon from "@/components/Icons/Facebook";
import InstagramIcon from "@/components/Icons/Instagram";
import GithubIcon from "@/components/Icons/Github";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const [text, setText] = useState("");
  const element = useRef<HTMLSpanElement>(null);
  const dict = useTranslations("dict.home");

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
      loopCount: 5,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    setText(element.current?.textContent || "");
  }, []);

  const firstPart = text?.slice(0, 6);
  const secondPart = text?.slice(6);

  return (
    <section className={styles.container} id="home">
      <Fade delay={200}>
        <div className={styles.names}>
          <h1 className={styles.title}>Franco Galluccio</h1>
          <Fade cascade delay={200}>
            <h2 className={styles.subtitle}>
              {"<"} {dict("initial_text")}{" "}
              <span ref={element}>{firstPart}</span>
              <span ref={element} className={styles.content}>
                {secondPart}
              </span>
              {"/>"}
            </h2>
          </Fade>
        </div>
      </Fade>
      <Fade cascade damping={0.1}>
        <div className={styles.btn_container}>
          <Link
            href={
              "https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/"
            }
            target="_blank"
          >
            <Button title={dict("btn01")} styleName="main" />
          </Link>
          <Link href={"assets/CV FRANCO IVAN GALLUCCIO.pdf"} target="_blank">
            <Button title={dict("btn02")} styleName="second" />
          </Link>
        </div>
      </Fade>
      <Fade>
        <div className={styles.socials}>
          <div className={styles.content}>
            <h2 className={styles.title}>{dict("follow")}</h2>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={"https://www.facebook.com/franco.galluccio"}
                  target="_blank"
                >
                  <FacebookIcon />
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={"https://www.instagram.com/fraaaangl/"}
                  target="_blank"
                >
                  <InstagramIcon />
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={"https://github.com/FrannGL"}
                  target="_blank"
                >
                  <GithubIcon />
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  href={
                    "https://www.linkedin.com/in/franco-ivan-galluccio-553b1224a/"
                  }
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default HomePage;
