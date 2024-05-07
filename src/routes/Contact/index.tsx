import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Card from "@/components/Card";
import LocationIcon from "@/components/Icons/Location";
import MessageIcon from "@/components/Icons/Message";
import WebsiteIcon from "@/components/Icons/Website";
import PhoneIcon from "@/components/Icons/Phone";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import useFormValidator from "@/hooks/useFormValidator";
import { Fade } from "react-awesome-reveal";
import { useMessageToast } from "@/hooks/useMessageToast";
import { POST } from "@/services/fetch";
import { useTranslations } from "next-intl";

interface Summary {
	id: number;
	title: string;
	description: string;
	icon: JSX.Element;
}

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [checkValidation, setCheckValidation] = useState(false);
	const errors = useFormValidator(formData);
	const { notify, notifyError } = useMessageToast();
	const dict = useTranslations("dict");

	const summaryInfo: Summary[] = [
		{
			id: 1,
			title: dict("contact.resume.location"),
			description: "Buenos Aires, Argentina",
			icon: <LocationIcon />,
		},
		{
			id: 2,
			title: dict("contact.resume.email"),
			description: "francoivangalluccio@gmail.com",
			icon: <MessageIcon />,
		},
		{
			id: 3,
			title: dict("contact.resume.phone"),
			description: "+54 11 2155-7802",
			icon: <PhoneIcon />,
		},
		{
			id: 4,
			title: dict("contact.resume.website"),
			description: "franngl.vercel.app",
			icon: <WebsiteIcon />,
		},
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const sendForm = async () => {
		try {
			const response = await POST("send-email", formData);
			if (response.statusCode === 201) {
				notify(dict("toast.success"));
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
				setCheckValidation(false);
			} else {
				notifyError(dict("toast.error_front"));
			}
		} catch (e) {
			notifyError(dict("toast.error_back"));
			console.log(e);
		}
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCheckValidation(true);
		if (Object.keys(errors).length === 0) {
			sendForm();
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<Title title={dict("titles.contact")} />
				<div className={styles.form_container}>
					<Fade className={styles.fade}>
						<div className={styles.resume_container}>
							{summaryInfo.map((summary: Summary) => (
								<Card
									key={summary.id}
									title={summary.title}
									description={summary.description}
									icon={summary.icon}
									className='card_contact'
								/>
							))}
						</div>
					</Fade>
					<Fade className={styles.fade}>
						<form className={styles.form} onSubmit={handleSubmit}>
							<Input
								type='text'
								name='name'
								value={formData.name}
								label={dict("contact.form.name")}
								placeholder='Carl Johnson ...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.name ? styles.error : styles.error_hidden}>{errors.name}</p>
							<Input
								type='email'
								name='email'
								value={formData.email}
								label={dict("contact.form.email")}
								placeholder='carljohnson@example.com ...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.email ? styles.error : styles.error_hidden}>{errors.email}</p>
							<Input
								type='text'
								name='subject'
								value={formData.subject}
								label={dict("contact.form.subject")}
								placeholder={dict("contact.form.subject_placeholder")}
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.subject ? styles.error : styles.error_hidden}>{errors.subject}</p>
							<Input
								type='textarea'
								name='message'
								value={formData.message}
								label={dict("contact.form.message")}
								placeholder={dict("contact.form.message_placeholder")}
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.message ? styles.error : styles.error_hidden}>{errors.message}</p>
							<Button title={dict("contact.form.btn")} styleName='second' />
						</form>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Contact;
