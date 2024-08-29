"use client";

import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import SelfServeDesignToolIcon from "@/assets/icons/self-serve-design-tool.svg";
import SmartPackagingIcon from "@/assets/icons/smart-packaging.svg";
import SustainabilityIconSrc from "@/assets/icons/sustainability-purple.svg";
import TrackMgtIconSrc from "@/assets/icons/track-management.svg";
import { Container } from "@/components/styled-components";

const SHOW_CASE_CONTENTS: {
	image: StaticImageData;
	title: string;
	text: string;
}[] = [
	{
		image: SelfServeDesignToolIcon,
		title: "SELF SERVE DESIGN TOOL",
		text: "Design packaging that perfectly fits your brand!",
	},
	{
		image: SmartPackagingIcon,
		title: "SMART PACKAGING",
		text: "Incorporate QR codes to promote different products.",
	},
	{
		image: SustainabilityIconSrc,
		title: "SUSTAINABILITY",
		text: "Eco-friendly and sustainable material.",
	},
	{
		image: TrackMgtIconSrc,
		title: "TRACK ENGAGEMENT",
		text: "Gain insights into customer engagement and behaviour.",
	},
];

export const ShowCaseSection = () => {
	return (
		<Wrapper>
			<Container>
				<ShowCaseWrapper>
					{SHOW_CASE_CONTENTS.map(
						({ image, title, text }, sccidx) => (
							<ShowCaseContent key={`${title}-${sccidx}`}>
								<ImageWrapper>
									<Image
										src={image}
										alt={`${title}'s icon`}
									/>
								</ImageWrapper>
								<ShowCaseContentTextWrapper>
									<ShowCaseContentTitle>
										{title}
									</ShowCaseContentTitle>
									<ShowCaseContentText>
										{text}
									</ShowCaseContentText>
								</ShowCaseContentTextWrapper>
							</ShowCaseContent>
						)
					)}
				</ShowCaseWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 50px 0;
	background-color: #e6e6fa;

	@media screen and (max-width: 768px) {
		padding: 90px 0;
	}
`;

const ShowCaseWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		max-width: 70%;
		margin: auto;
	}
`;

const ImageWrapper = styled.div`
	width: 30px;
	height: 30px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const ShowCaseContent = styled.div`
	width: 24%;
	display: flex;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 40px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const ShowCaseContentTextWrapper = styled.div`
	margin-left: 10px;
`;

const ShowCaseContentTitle = styled.h4`
	text-align: left;
`;

const ShowCaseContentText = styled.p`
	text-align: left;
	font-size: 15px;
	margin-top: 5px;
	line-height: 22px;
`;
