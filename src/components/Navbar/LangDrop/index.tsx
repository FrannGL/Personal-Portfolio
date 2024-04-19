"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import LanguageIcon from "@/components/Icons/Language";
import { useState } from "react";
import { usePathname, useRouter, locales } from "@/navigation";
import { useLocale } from "next-intl";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";

const LangDrop = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { dropdownRef } = useCloseDropdown(setOpen);
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();

	return (
		<div className={styles.container} ref={dropdownRef}>
			<button onClick={() => setOpen(!open)} className={styles.lang_button}>
				<LanguageIcon />
				<span>|</span>
				<h1> {locale}</h1>
			</button>

			<li className={`${styles.list_container} ${!open && styles.list_hidden}`}>
				{locales
					.filter(loc => loc !== locale)
					.map(loc => {
						return (
							<div key={loc}>
								<button
									className={open ? `${styles.list_text}` : `${styles.list_text} ${styles.list_text_hidden}`}
									onClick={() => router.replace(pathname, { locale: loc })}
								>
									{loc}
								</button>
							</div>
						);
					})}
			</li>
		</div>
	);
};

export default LangDrop;
