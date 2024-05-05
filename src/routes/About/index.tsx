import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import { Fade } from "react-awesome-reveal";
import Title from "@/components/Title";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner_container}>
				<Fade>
					<div className={styles.profile_container}>
						<Image src='/assets/profile.jpg' className={styles.profile} alt='Profile' width={500} height={700} />
						<div className={styles.border}></div>
					</div>
				</Fade>
				<div className={styles.about_container}>
					<Fade>
						<Title title='ABOUT ME' />
						<div className={styles.content}>
							<div className={styles.names}>
								<Fade direction='down' triggerOnce={true}>
									<h3 className={styles.name}>I am Franco Galluccio</h3>
								</Fade>
								<Fade direction='up' triggerOnce={true}>
									<h4 className={styles.subname}>I am a Full-Stack Web Developer</h4>
								</Fade>
							</div>
							<Fade direction='up' triggerOnce={true}>
								<div className={styles.leyends}>
									<p className={styles.leyend}>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. A obcaecati enim suscipit, impedit
										expedita tempora cumque sed reiciendis nihil tenetur nulla nam cupiditate vero deleniti. Libero,
										maxime animi? Id, tempore.
									</p>
									<p className={styles.leyend}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis similique
										consequatur optio suscipit distinctio error impedit culpa molestias laudantium iste quidem, magnam
										expedita animi fugiat veniam earum officia? Provident?
									</p>
								</div>
							</Fade>
						</div>
					</Fade>
					<Fade delay={700} cascade damping={0.6} triggerOnce={true}>
						<ul className={styles.resume}>
							<li className={styles.item}>
								Name: <span className={styles.content}>Franco Galluccio</span>
							</li>
							<li className={styles.item}>
								Age: <span className={styles.content}>28</span>
							</li>
							<li className={styles.item}>
								Phone: <span className={styles.content}>+54 9 11-2155-7802</span>
							</li>
							<li className={styles.item}>
								Address: <span className={styles.content}>Buenos Aires, Argentina</span>
							</li>
							<li className={styles.item}>
								Website: <span className={styles.content}>franngl.vercel.app</span>
							</li>
							<li className={styles.item}>
								Email: <span className={styles.content}>francoivangalluccio@gmail.com</span>
							</li>
						</ul>
					</Fade>
					<Fade delay={4300} triggerOnce={true}>
						<div className={styles.btn_container}>
							<Link href={"assets/CV FRANCO IVAN GALLUCCIO.pdf"} target='_blank'>
								<Button title='Download CV' styleName='second' />
							</Link>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default About;
