import Title from "@/components/Title";
import styles from "./styles.module.scss";
import Card from "./Card";
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

export interface Resume {
	id: number;
	title: string;
	description: string;
	icon: JSX.Element;
}

const Resume = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [checkValidation, setCheckValidation] = useState(false);
	const errors = useFormValidator(formData);
	const { notify, notifyError } = useMessageToast();

	const resumeInfo: Resume[] = [
		{
			id: 1,
			title: "Location",
			description: "Buenos Aires, Argentina",
			icon: <LocationIcon />,
		},
		{
			id: 2,
			title: "Email",
			description: "francoivangalluccio@gmail.com",
			icon: <MessageIcon />,
		},
		{
			id: 3,
			title: "Phone",
			description: "+54 11 2155-7802",
			icon: <PhoneIcon />,
		},
		{
			id: 4,
			title: "Website",
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

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCheckValidation(true);
		if (Object.keys(errors).length === 0) {
			notify("Formulario enviado correctamente");
			console.log("Formulario enviado:", formData);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			setCheckValidation(false);
		}
	};

	return (
		<div className={styles.container}>
			<Fade>
				<div className={styles.inner_container}>
					<Title title='CONTACT' />
					<div className={styles.form_container}>
						<div className={styles.resume_container}>
							{resumeInfo.map(resume => (
								<Card key={resume.id} resume={resume} />
							))}
						</div>
						<form className={styles.form} onSubmit={handleSubmit}>
							<Input
								type='text'
								name='name'
								value={formData.name}
								label='Name'
								placeholder='Carl Johnson ...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.name ? styles.error : styles.error_hidden}>{errors.name}</p>
							<Input
								type='email'
								name='email'
								value={formData.email}
								label='Email'
								placeholder='carljohnson@example.com ...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.email ? styles.error : styles.error_hidden}>{errors.email}</p>
							<Input
								type='text'
								name='subject'
								value={formData.subject}
								label='Subject'
								placeholder='Job Offer ...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.subject ? styles.error : styles.error_hidden}>{errors.subject}</p>
							<Input
								type='textarea'
								name='message'
								value={formData.message}
								label='Message'
								placeholder='Your message...'
								onChange={handleChange}
							/>
							<p className={checkValidation && errors.message ? styles.error : styles.error_hidden}>{errors.message}</p>
							<Button title='Send message' styleName='second' />
						</form>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Resume;
