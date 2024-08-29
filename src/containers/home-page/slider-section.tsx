"use client";

import { Button, Container } from "@/components/styled-components";
import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import ExploreImg1 from "@/assets/icons/explore-img-1.svg";
import ExploreImg2 from "@/assets/icons/explore-img-2.svg";
import ExploreImg3 from "@/assets/icons/explore-img-3.svg";
import ExploreImg4 from "@/assets/icons/explore-img-4.svg";

const Images: {
	image: StaticImageData;
	id: number;
}[] = [
	{
		id: 1,
		image: ExploreImg1,
	},
	{
		id: 2,
		image: ExploreImg2,
	},
	{
		id: 3,
		image: ExploreImg3,
	},
	{
		id: 4,
		image: ExploreImg4,
	},
];

export const SliderSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		// arrows: false,
	};

	return (
		<Wrapper>
			<SliderImageWrapper>
				{Images.map(({ id, image }) => (
					<ImageWrapper
						key={id}
						$hide={id > 2}
					>
						<Image
							src={image}
							alt="explore image"
						/>
						<ExploreBtn
							$bg="#FFB600"
							$color="#000000"
						>
							explore
						</ExploreBtn>
					</ImageWrapper>
				))}
			</SliderImageWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #ffdab9;
`;

const SliderImageWrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	padding: 100px 0;
	flex-wrap: wrap;
`;

const ImageWrapper = styled.div<{ $hide: boolean }>`
	width: 23.5%;
	position: relative;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 45%;
		display: ${(props) => (props.$hide ? "none" : "")};
	}
`;

const ExploreBtn = styled(Button)`
	padding: 15px 36px;
	border-radius: 18px;
	position: absolute;
	bottom: 18px;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	font-weight: 700;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		padding: 12px 24px;
		border-radius: 10px;
	}
`;
