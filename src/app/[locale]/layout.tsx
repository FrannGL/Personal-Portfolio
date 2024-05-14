import type { Metadata } from "next";
import { locales } from "@/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";

const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Hey!👋 Franco Galluccio Portfolio",
	description: "Personal site",
	openGraph: {
		title: "Hey!👋 Franco Galluccio Portfolio",
		description: "Personal site",
	},
};

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	if (!locales.includes(locale as "en" | "es")) notFound();
	const messages = useMessages();

	return (
		<html lang={locale}>
			<body className={montserrat.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
