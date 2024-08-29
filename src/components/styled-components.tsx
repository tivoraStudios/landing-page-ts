"use client";

import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 95%;
	margin: auto;
`;

export const Spacer = styled.div`
	height: 100px;
	width: 100%;
`;

export const Button = styled.button<{ $bg: string; $color: string }>`
	background-color: ${(props) => props.$bg};
	color: ${(props) => props.$color};
	font-size: 15px;
	border: none;
	outline: none;
	cursor: pointer;
`;
