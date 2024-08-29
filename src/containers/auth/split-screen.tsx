"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LogoLetterWhite from "@/assets/icons/tivora-letter-white.svg";
import LogoLetterBlack from "@/assets/icons/tivora-letter-black.svg";
import { Button } from "@/components/styled-components";

export const SplitScreen = () => {
	return (
		<Wrapper>
			<FirstSection>
				<BlackLogoWrapper>
					<Image
						src={LogoLetterBlack}
						alt="logo letter"
					/>
				</BlackLogoWrapper>
				<Title>Log In</Title>
				<Title>or</Title>
				<Title>Create an Account</Title>
				<Text>
					Use your email or another service to continue with Tivora
					(it's free)! It's easier to continue if you have an
					account—all your designs will be saved, and it's free to
					create!
				</Text>
				<CtaWrapper>
					<AuthBtn
						$bg="transparent"
						$color="#000000"
					>
						Continue with Google
					</AuthBtn>
					<AuthBtn
						$bg="transparent"
						$color="#000000"
					>
						Continue with Facebook
					</AuthBtn>
				</CtaWrapper>
			</FirstSection>
			<SecondSection>
				<Image
					src={LogoLetterWhite}
					alt="logo letter"
				/>
			</SecondSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;

	section {
		width: 50%;
		height: 100%;
		overflow: hidden scroll;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		height: 100%;
		overflow: auto;

		section {
			overflow: auto;
			width: 100%;
		}

		section:nth-child(2) {
			height: 80vh;
		}
	}
`;

const FirstSection = styled.section`
	padding: 100px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BlackLogoWrapper = styled.div`
	margin-bottom: 30px;
`;

const Title = styled.h5`
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 10px;
	text-align: center;
`;

const Text = styled.p`
	font-size: 16px;
	font-weight: 300;
	text-align: center;
	margin: 20px 0 30px 0;
`;

const CtaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	width: 100%;
	max-width: 95%;

	button:first-child {
		margin-bottom: 20px;
	}
`;

const AuthBtn = styled(Button)`
	border-radius: 18px;
	height: 50px;
	border: 1px solid #000000;
	font-weight: 600;
	font-size: 18px;
`;

const SecondSection = styled.section`
	background-color: #9032ff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
