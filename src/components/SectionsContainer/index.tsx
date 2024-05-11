import styles from "./styles.module.scss";
import { useLayout } from "@/context/LayoutContext";
import { useEffect } from "react";
import HomePage from "@/routes/Home";
import About from "@/routes/About";
import Services from "@/routes/Services";
import Resume from "@/routes/Resume";
import Portfolio from "@/routes/Portfolio";
import Contact from "@/routes/Contact";

const sections = [
  { id: "home", component: <HomePage /> },
  { id: "about", component: <About /> },
  // { id: "services", component: <Services /> },
  // { id: "resume", component: <Resume /> },
  // { id: "portfolio", component: <Portfolio /> },
  // { id: "contact", component: <Contact /> },
];

const SectionsContainer = () => {
  const { activeRoute } = useLayout();

  useEffect(() => {
    const targetElement = document.getElementById(activeRoute.slice(1));

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeRoute]);

  return (
    <section>
      {sections.map((section, index) => (
        <div
          className={styles.container}
          id={section.id}
          key={`${section.id}-${index}`}
        >
          {section.component}
        </div>
      ))}
    </section>
  );
};

export default SectionsContainer;
