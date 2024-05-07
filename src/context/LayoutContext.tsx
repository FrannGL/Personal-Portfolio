import AboutIcon from "@/components/Icons/About";
import ContactIcon from "@/components/Icons/Contact";
import HomeIcon from "@/components/Icons/Home";
import PortfolioIcon from "@/components/Icons/Portfolio";
import ResumeIcon from "@/components/Icons/Resume";
import ServicesIcon from "@/components/Icons/Services";
import { useTranslations } from "next-intl";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
} from "react";

interface LayoutContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  routes: { title: string; path: string; icon: JSX.Element }[];
  activeRoute: string;
  setActiveRoute: Dispatch<SetStateAction<string>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>("#home");
  const dict = useTranslations("dict.titles");

  const routes = useMemo(
    () => [
      { title: dict("home"), icon: <HomeIcon />, path: "#home" },
      { title: dict("about"), icon: <AboutIcon />, path: "#about" },
      { title: dict("services"), icon: <ServicesIcon />, path: "#services" },
      { title: dict("resume"), icon: <ResumeIcon />, path: "#resume" },
      { title: dict("portfolio"), icon: <PortfolioIcon />, path: "#portfolio" },
      { title: dict("contact"), icon: <ContactIcon />, path: "#contact" },
    ],
    [dict]
  );

  const currentIndex = routes.findIndex((route) => route.path === activeRoute);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        routes.length - 1
      );

      setActiveRoute(routes[newIndex].path);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, routes, setActiveRoute]);

  return (
    <LayoutContext.Provider
      value={{ isOpen, setIsOpen, activeRoute, setActiveRoute, routes }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
