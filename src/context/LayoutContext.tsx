import AboutIcon from "@/components/Icons/About";
import ContactIcon from "@/components/Icons/Contact";
import HomeIcon from "@/components/Icons/Home";
import PortfolioIcon from "@/components/Icons/Portfolio";
import ResumeIcon from "@/components/Icons/Resume";
import ServicesIcon from "@/components/Icons/Services";
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface LayoutContextType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	routeName: string;
	setRouteName: Dispatch<SetStateAction<string>>;
	routes: { title: string; path: string; icon: JSX.Element }[];
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = (): LayoutContextType => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}
	return context;
};

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [routeName, setRouteName] = useState<string>("#home");

	const routes = [
		{
			title: `Home`,
			icon: <HomeIcon />,
			path: "#home",
		},
		{
			title: `About`,
			icon: <AboutIcon />,
			path: "#about",
		},
		{
			title: `Services`,
			icon: <ServicesIcon />,
			path: "#services",
		},
		{
			title: `Resume`,
			icon: <ResumeIcon />,
			path: "#resume",
		},
		{
			title: `Portfolio`,
			icon: <PortfolioIcon />,
			path: "#portfolio",
		},
		{
			title: `Contact`,
			icon: <ContactIcon />,
			path: "#contact",
		},
	];

	return (
		<LayoutContext.Provider value={{ isOpen, setIsOpen, routeName, setRouteName, routes }}>
			{children}
		</LayoutContext.Provider>
	);
};
