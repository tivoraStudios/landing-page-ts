"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InstaIconSrc from "@/assets/icons/instagram.svg";
import LinkedinIconSrc from "@/assets/icons/linkedin.svg";
import TiktokIconSrc from "@/assets/icons/tiktok.svg";
import LogoIconSrc from "@/assets/icons/logo-desktop.svg";
import LogoMobileIconSrc from "@/assets/icons/logo-mobile.svg";
import { useMediaQuery } from "@/hooks/use-media-query";

export const Footer = () => {
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 768px)");

	const handleRouteToHomepage = () => {
		router.push("/");
	};

	return (
		<Wrapper>
			<Content>
				<ContentTitle>Join Our Community</ContentTitle>
				<Text>
					<span>
						By subscribing, you will be among the first to know when
					</span>
					<br />
					<span>
						we officially launch and have the opportunity to try our
					</span>
					<br />
					<span>demo. We promise no spam!</span>
				</Text>
				<FormWrapper>
					<Input
						placeholder="youremailaddress@email.com"
						type="email"
					/>
					<JoinBtn>Join Our Community</JoinBtn>
				</FormWrapper>
			</Content>
			<FooterTextWrapper id="footerLinksSection">
				<LogoAndSocials>
					<Logo onClick={handleRouteToHomepage}>
						<Image
							src={isMobile ? LogoMobileIconSrc : LogoIconSrc}
							alt="tivora studios logo"
						/>
					</Logo>
					<Socials>
						<Link
							href="https://www.instagram.com/tivorastudios"
							target="_blank"
						>
							<Image
								src={InstaIconSrc}
								alt="instagram icon"
							/>
						</Link>
						<Link
							href="https://www.tiktok.com/@tivorastudios"
							target="_blank"
						>
							<Image
								src={TiktokIconSrc}
								alt="tiktok icon"
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/company/tivorastudios"
							target="_blank"
						>
							<Image
								src={LinkedinIconSrc}
								alt="youtube icon"
							/>
						</Link>
					</Socials>
				</LogoAndSocials>
				<CopyRight>
					© tivorastudios {new Date().getFullYear()}
				</CopyRight>
			</FooterTextWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 96%;
	margin: auto;
`;

const Content = styled.div`
	border: 1px solid #9032ff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 20px;
	padding: 40px 30px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const ContentTitle = styled.h5`
	font-size: 22px;
	font-weight: 700;
	color: #222238;
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		margin-bottom: 20px;
	}
`;

const Text = styled.p`
	text-align: left;
	font-size: 17px;
	width: 45%;

	@media screen and (max-width: 1125px) {
		br {
			display: none;
		}

		span {
			margin-right: 3px;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const FormWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: space-between;
		margin-top: 30px;
		flex-direction: column;
	}
`;

const Input = styled.input`
	border: 1px solid #767676;
	padding: 15px;
	border-radius: 18px;
	font-size: 16px;
	width: 60%;
	margin-right: 20px;
	outline: none;

	&::placeholder {
		color: #76767678;
	}

	&:focus {
		border-color: #9032ff;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 20px;
	}
`;

const JoinBtn = styled.button`
	background-color: #ffb600;
	color: #000000;
	border-radius: 18px;
	padding: 15px 36px;
	font-size: 17px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;

	@media screen and (max-width: 1150px) {
		font-size: 14px;
		padding: 10px 12px;
	}

	@media screen and (max-width: 768px) {
		width: 70%;
		border-radius: 10px;
		padding: 13px 26px;
	}
`;

const FooterTextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 50px 0;

	@media screen and (max-width: 768px) {
		position: relative;
	}

	@media screen and (max-width: 400px) {
		margin-top: 100px;
	}
`;

const LogoAndSocials = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.p`
	font-weight: 700;
	font-size: 22px;
	cursor: pointer;
	margin-right: 50px;

	@media screen and (max-width: 768px) {
		position: absolute;
		margin-right: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	@media screen and (max-width: 450px) {
		left: 10.9rem;
	}

	@media screen and (max-width: 400px) {
		top: -3rem;
		left: 0;
		transform: initial;
	}
`;

const CopyRight = styled.p``;

const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		margin-right: 10px;

		&:last-child {
			margin-rigth: 0;
		}
	}
`;
