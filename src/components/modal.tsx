"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	bgColor: string;
	maxWidth?: string;
	padding?: string;
	children: ReactNode;
}

export const Modal = (props: ModalProps) => {
	const { isOpen, onClose, bgColor, maxWidth, padding, children } = props;
	if (!isOpen) return null;

	return (
		<>
			<Backdrop onClick={onClose} />
			<ModalContainer
				$bgcolor={bgColor}
				$maxwidth={maxWidth}
				$padding={padding}
			>
				<Content>{children}</Content>
			</ModalContainer>
		</>
	);
};

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;

const ModalContainer = styled.div<{
	$bgcolor: string;
	$maxwidth?: string;
	$padding?: string;
}>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: ${(props) => (props.$padding ? props.$padding : "20px")};
	border-radius: 18px;
	background-color: ${(props) => props.$bgcolor};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	max-width: ${(props) => (props.$maxwidth ? props.$maxwidth : "500px")};
	width: 90%;
`;

const Content = styled.div``;
