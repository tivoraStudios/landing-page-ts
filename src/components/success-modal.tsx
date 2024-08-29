"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SuccessIcon from "@/assets/icons/success.svg";
import { Modal } from "./modal";

interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const SuccessModal = (props: SuccessModalProps) => {
	const { isOpen, onClose } = props;
	return (
		<Wrapper>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				bgColor="#9032ff"
				maxWidth="35rem"
				padding="35px 30px 50px"
			>
				<Container>
					<SuccessIconWrapper>
						<Image
							src={SuccessIcon}
							alt="success icon"
						/>
					</SuccessIconWrapper>
					<Title>We've added you to our waitlist!</Title>
					<Text>
						We will let you know when TivoraStudios is ready!
					</Text>
				</Container>
			</Modal>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	color: #ffffff;
`;

const Container = styled.div`
	width: 100%;
	max-width: 80%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SuccessIconWrapper = styled.div`
	width: 80px;
	height: 80px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const Title = styled.h2`
	font-size: 30px;
	text-align: center;
	margin-top: 20px;
	font-weight: 600;
	line-height: 40px;
`;

const Text = styled.p`
	font-size: 16px;
	text-align: center;
	margin-top: 20px;
	line-height: 20px;
	font-weight: 300;
`;
