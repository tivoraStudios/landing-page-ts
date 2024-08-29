"use client";

import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import SustainableIconSrc from "@/assets/icons/sustainable-innovation.svg";
import ImpactGrowthIconSrc from "@/assets/icons/impact-growth.svg";
import CreativityIconSrc from "@/assets/icons/creativity.svg";
import { Container } from "@/components/styled-components";

const OUR_BELIEFS: {
	image: StaticImageData;
	title: string;
	text: string;
}[] = [
	{
		image: SustainableIconSrc,
		title: "SUSTAINABLE INNOVATION",
		text: "We are committed to sustainable improvement, continuously seeking ways to minimize our environmental impact through compostable, recyclable, and reusable materials and processes. Our dedication drives us to innovate and evolve, ensuring our packaging solutions are both responsible and cutting-edge",
	},
	{
		image: ImpactGrowthIconSrc,
		title: "IMPACTFUL GROWTH",
		text: "We aim to create a significant positive impact on both our clients and the environment. By fostering growth through data-driven insights and strategic partnerships, we empower businesses to thrive while contributing to a more sustainable world.",
	},
	{
		image: "",
		title: "",
		text: "",
	},
	{
		image: CreativityIconSrc,
		title: "CREATIVITY",
		text: "Creativity is at the heart of everything we do. We strive to make packaging design an enjoyable and engaging experience, offering unique and customizable solutions that reflect our clients' brand identities and captivate their customers.",
	},
];

export const OutBeliefSystem = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Title>Our Belief System </Title>
					<BeliefsWrapper>
						{OUR_BELIEFS.map(({ image, title, text }, obid) => (
							<Belief
								key={`${title}-${obid}`}
								$isspacer={title === ""}
							>
								<BeliefImageWrapper>
									<BeliefImage>
										<Image
											src={image}
											alt=""
										/>
									</BeliefImage>
								</BeliefImageWrapper>
								<BeliefTitle>{title}</BeliefTitle>
								<BeliefText>{text}</BeliefText>
							</Belief>
						))}
					</BeliefsWrapper>
				</Content>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #ffdab9;
	padding: 80px 0;
`;

const Content = styled.div``;

const Title = styled.h3`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
`;

const BeliefsWrapper = styled.div`
	margin: 50px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	> div:first-child {
		margin-right: 30px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Belief = styled.div<{ $isspacer: boolean }>`
	${(props) =>
		props.$isspacer
			? `
			flex-basis: 100%;
			height: 0;
		`
			: `
			border: 1px solid #9032ff;
			border-radius: 20px;
			padding: 20px;
			width: 26%;
			height: 400px;
			margin-bottom: 40px;
			background-color: #ffffff;
		`};

	&:last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 1050px) {
		width: 40%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: fit-content;
		margin: 0 0 50px;
		display: ${(props) => (props.$isspacer ? "none" : "")};
	}
`;

const BeliefImageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const BeliefImage = styled.div`
	width: 80px;
	height: 80px;
	background-color: #9032ff;
	border-radius: 50%;
	padding: 15px;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 1200px) {
		width: 60px;
		height: 60px;
	}
`;

const BeliefTitle = styled.h4`
	font-weight: 600;
	font-siz3e: 25px;
	text-align: center;
	margin-top: 20px;
`;

const BeliefText = styled.p`
	margin-top: 15px;
	text-align: center;
	width: 80%;
	margin: 15px auto;

	@media screen and (max-width: 1200px) {
		width: 100%;
		font-size: 14px;
		line-height: 20px;
	}
`;
