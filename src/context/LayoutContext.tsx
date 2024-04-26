import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface LayoutContextType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
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

	return <LayoutContext.Provider value={{ isOpen, setIsOpen }}>{children}</LayoutContext.Provider>;
};
