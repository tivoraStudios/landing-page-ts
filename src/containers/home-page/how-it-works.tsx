"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import HIWIconSrc1 from "@/assets/icons/hiw-1.svg";
import HIWIconSrc2 from "@/assets/icons/hiw-2.svg";
import HIWIconSrc3 from "@/assets/icons/hiw-3.svg";
import HIWIconSrc4 from "@/assets/icons/hiw-4.svg";

const HOW_IT_WORKS: {
	num: string;
	title: string;
	text: string;
	image: StaticImageData;
}[] = [
	{
		num: "01",
		title: "Choose the Package Type ",
		text: "Select the type of packaging that best suits your needs. Whether you're looking for options by type or industry, We offer a wide range of sustainable packaging solutions that align with your brand identity.",
		image: HIWIconSrc1,
	},
	{
		num: "02",
		title: "Customize Your Design or Create From Scratch ",
		text: "Personalize your packaging by choosing from our selection of templates or designing from scratch. Our user-friendly platform makes it easy to create unique and captivating packaging that reflects your brand's personality.",
		image: HIWIconSrc2,
	},
	{
		num: "03",
		title: "Integrate Your QR Code",
		text: "Enhance your packaging with a dynamic QR code. This feature not only promotes different aspects of your business but also provides valuable insights into customer engagement and behavior.",
		image: HIWIconSrc3,
	},
	{
		num: "04",
		title: "Order & Track Effectiveness",
		text: "Once your design is finalized, place your order and enjoy the enhanced unboxing experience. Use our detailed QR code analytics to track the effectiveness of your packaging and make informed, data-driven decisions to improve customer engagement.",
		image: HIWIconSrc4,
	},
];

export const HowItWorks = () => {
	return (
		<Wrapper>
			<Title>How It Works</Title>
			<HowItWorksWrapper>
				{HOW_IT_WORKS.map(({ num, title, text, image }, hiwidx) => (
					<HowItWorksContent
						key={`${num}-${hiwidx}`}
						$flexdirection={hiwidx % 2 < 1 ? "row" : "row-reverse"}
					>
						<HowItWorksInfo>
							<HowItWorksNum>{num}</HowItWorksNum>
							<HowItWorksTitle>{title}</HowItWorksTitle>
							<HowItWorksText>{text}</HowItWorksText>
						</HowItWorksInfo>
						<HowItWorksImgWrapper>
							<Image
								src={image}
								alt=""
							/>
						</HowItWorksImgWrapper>
					</HowItWorksContent>
				))}
			</HowItWorksWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 60px auto;
`;

const Title = styled.h3`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
`;

const HowItWorksWrapper = styled.div`
	margin: 50px 0;
`;

const HowItWorksContent = styled.div<{ $flexdirection: "row" | "row-reverse" }>`
	height: 605px;
	display: flex;
	flex-direction: ${(props) => props.$flexdirection};

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: fit-content;
	}
`;

const HowItWorksInfo = styled.div`
	width: 50%;
	padding: 20px 160px 0 40px;

	@media screen and (max-width: 1200px) {
		padding-right: 140px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 40px;
	}
`;

const HowItWorksNum = styled.p`
	font-size: 60px;
	font-weight: 700;
	color: #9032ff;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
`;

const HowItWorksTitle = styled.h4`
	font-size: 32px;
	font-weight: 600;
	margin: 15px 0;

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
`;

const HowItWorksText = styled.p`
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 22px;
	}
`;

const HowItWorksImgWrapper = styled.div`
	width: 50%;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
