"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import TivoraLogoLetter from "@/assets/icons/tivora-logo-letter.svg";
import { Modal } from "./modal";

interface WaitListModalProps {
	isOpen: boolean;
	onClose: () => void;
	handleShowSuccessModal: () => void;
}

export const WaitListModal = (props: WaitListModalProps) => {
	const { isOpen, onClose, handleShowSuccessModal } = props;

	const handleSubmit = () => {
		onClose();
		handleShowSuccessModal();
	};

	return (
		<Wrapper>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				bgColor="#9032ff"
				maxWidth="60rem"
				padding="40px"
			>
				<Container>
					<LogoWrapper>
						<Image
							src={TivoraLogoLetter}
							alt="logo letter"
						/>
					</LogoWrapper>
					<Title>Join the Waitlist for Tivora Studios</Title>
					<Text>
						Join the waitlist and be the first to experience the
						future of creative and sustainable packaging solutions.
						Get exclusive updates, early access, and more exciting
						news from Tivora Studios!
					</Text>
					<FormWrapper>
						<InputWrapper>
							<Input placeholder="Full Name..." />
						</InputWrapper>
						<InputWrapper>
							<Input placeholder="Email Address..." />
						</InputWrapper>
						<SubmitBtn onClick={handleSubmit}>
							Join the Waitlist
						</SubmitBtn>
					</FormWrapper>
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
	max-width: 70%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

const LogoWrapper = styled.div``;

const Title = styled.h2`
	font-size: 38px;
	text-align: center;
	margin-top: 20px;
	font-weight: 500;
	line-height: 48px;

	@media screen and (max-width: 768px) {
		font-size: 30px;
		line-height: 38px;
	}
`;

const Text = styled.p`
	font-size: 16px;
	text-align: center;
	margin-top: 30px;
	line-height: 23px;
	font-weight: 300;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 20px;
		margin-top: 20px;
	}
`;

const FormWrapper = styled.div`
	margin-top: 30px;
	width: 100%;
	max-width: 70%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

const InputWrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;
`;

const Input = styled.input`
	border: 1px solid #767676;
	padding: 16px 30px;
	border-radius: 18px;
	font-size: 16px;
	width: 100%;
	outline: none;

	&::placeholder {
		color: #76767678;
	}

	&:focus {
		border-color: #000000;
	}
`;

const SubmitBtn = styled.button`
	background-color: #ffb600;
	color: #000000;
	border-radius: 18px;
	padding: 15px 36px;
	font-size: 17px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;
	width: 100%;
`;
