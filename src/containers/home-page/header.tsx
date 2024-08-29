"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import HeroBgImgSrc from "@/assets/icons/hero-bg.svg";
import { Container } from "../../components/styled-components";
import { SuccessModal } from "@/components/success-modal";
import { WaitListModal } from "@/components/waitlist-modal";

export const Header = () => {
	const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

	const handleToggleWaitlistModal = () => {
		setIsWaitlistModalOpen(!isWaitlistModalOpen);
	};

	const handleToggleSuccessModal = () => {
		setIsSuccessModalOpen(!isSuccessModalOpen);
	};

	return (
		<>
			{/* <HeroBg
				src={HeroBgImgSrc}
				alt="header hero bg"
			/> */}
			<Wrapper>
				<SubText>
					sustainable smart packaging solutions that prioritize
					accurately reflecting your brand identity
				</SubText>
				<Title>
					<span className="br-span">
						Your Brand's Perfect Packaging
					</span>
					<br />
					<ColoredLetters>De</ColoredLetters>
					<span>sign,</span>
					<ColoredLetters>Custo</ColoredLetters>
					<span>mize ,</span>
					<ColoredLetters>Ord</ColoredLetters>
					<span>er &</span>
					<br />
					<ColoredLetters>Tra</ColoredLetters>
					<span>ck</span>
				</Title>
				<HeaderText>
					<span className="br-span">
						Empower your brand with sustainable, smart packaging
						that's easy to create,
					</span>
					<br />
					<span className="br-span">
						customize, and order. Gain valuable insights into
						customer engagement through
					</span>
					<br />
					<span>detailed QR code analytics</span>
				</HeaderText>
				<HeaderCTA>
					<CreateDesignBtn onClick={handleToggleWaitlistModal}>
						Create My Own Design
					</CreateDesignBtn>
					<ExploreTemplateBtn onClick={handleToggleWaitlistModal}>
						Explore Templates
					</ExploreTemplateBtn>
				</HeaderCTA>
			</Wrapper>
			<WaitListModal
				isOpen={isWaitlistModalOpen}
				onClose={handleToggleWaitlistModal}
				handleShowSuccessModal={handleToggleSuccessModal}
			/>
			<SuccessModal
				isOpen={isSuccessModalOpen}
				onClose={handleToggleSuccessModal}
			/>
		</>
	);
};

const Wrapper = styled(Container)`
	margin: 50px auto;
	position: relative;

	@media screen and (max-width: 768px) {
		br {
			display: none;
		}

		.br-span {
			margin-right: 4px;
		}
	}
`;

const HeroBg = styled(Image)`
	position: absolute;
`;

const SubText = styled.p`
	text-align: center;
	color: #000000;
	font-size: 15px;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 50px;
	margin: 35px 0 20px 0;
	text-align: center;

	@media screen and (max-width: 768px) {
		width: fit-content;
		word-break: break-word;
		font-size: 30px;
	}
`;

const HeaderText = styled.p`
	text-align: center;
	width: 70%;
	margin: 30px auto 20px auto;
	color: #000000;
	font-size: 15px;
	line-height: 26px;

	@media screen and (max-width: 768px) {
		margin: 20px auto;
	}
`;

const HeaderCTA = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CreateDesignBtn = styled.button`
	background-color: #222238;
	color: #ffffff;
	border-radius: 18px;
	padding: 15px 56px;
	font-size: 15px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;
`;

const ExploreTemplateBtn = styled(CreateDesignBtn)`
	background-color: #9032ff;
	margin-top: 15px;
`;

const ColoredLetters = styled.span`
	color: #9032ff;
`;
