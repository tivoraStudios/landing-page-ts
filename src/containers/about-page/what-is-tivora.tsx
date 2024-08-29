"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container } from "@/components/styled-components";
import HeaderImg1 from "@/assets/icons/about-us-header-img-1.svg";
import HeaderImg2 from "@/assets/icons/about-us-header-img-2.svg";

export const WhatIsTivora = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<TextWrapper>
						<Title>What is Tivora Studios? </Title>
						<Text>
							Tivora Studios was created to provide you and your
							business with the tools to create, design and order
							sustainable smart packaging solutions that
							accurately reflect your brand identity.
						</Text>

						<Text>
							Our goal is to simplify the creative process, making
							it easy to create, customize, and order packaging.
							In addition, we provide insights into customer
							engagement and behaviour through detailed QR code
							analytics.
						</Text>

						<Text>
							Our mission is to help you enhance the unboxing
							experience, understand your customers and make
							informed data-driven decisions. Design, create,
							order & track the effectiveness of your packaging.
						</Text>
						<JoinBtn>Join the Community</JoinBtn>
					</TextWrapper>
					<ImageWrapper>
						<Image
							src={HeaderImg1}
							alt="light grey bg"
						/>
						<Image
							src={HeaderImg2}
							alt="dark grey bg"
						/>
					</ImageWrapper>
				</Content>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 95px auto 200px;

	@media screen and (max-width: 1200px) {
		margin: 95px auto 90px;
	}

	@media screen and (max-width: 768px) {
		margin: 50px auto;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const TextWrapper = styled.div`
	width: 40%;
	margin-left: 40px;

	@media screen and (max-width: 1100px) {
		width: 50%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
`;

const ImageWrapper = styled.div`
	width: 35%;
	position: relative;
	margin-top: 0;

	@media screen and (max-width: 1200px) {
		margin-top: -10%;
	}

	img {
		width: 70%;

		@media screen and (max-width: 1200px) {
			width: 80%;
		}
	}

	img:nth-child(2) {
		position: absolute;
		right: 0;
		top: 40%;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Title = styled.h2`
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 50px;
	width: 50%;

	@media screen and (max-width: 1100px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

const Text = styled.p`
	margin-bottom: 30px;

	@media screen and (max-width: 768px) {
		text-align: center;
		line-height: 25px;
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

	@media screen and (max-width: 768px) {
		display: block;
		margin: auto;
	}
`;
