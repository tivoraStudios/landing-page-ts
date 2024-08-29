"use client";

import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
	image: StaticImageData;
}

export const HeroSection = (props: HeroSectionProps) => {
	const { image } = props;

	return (
		<Wrapper>
			<Image
				src={image}
				alt="about us hero background"
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;

	img {
		width: 100%;
		height: 100%;
	}
`;
