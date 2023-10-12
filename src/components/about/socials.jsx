import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTelegram,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href="https://t.me/karimboyevpartfolio" target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTelegram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Telegram</div>
				</a>
			</div>

			<div className="social">
				<a href="https://github.com/Karimboyevcmbk" target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href="https://www.linkedin.com/in/davron-karimboyev-8a7776285/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a
					href="https://www.instagram.com/karimboyev7_/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Instagram</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href="mailto:shakhhumoyun66@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">shakhhumoyun66@gmail.com</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
