"use client";

import { Container } from "@/components/styled-components";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import QrCodeIconSrc from "@/assets/icons/qr-code.svg";

export const QrCodeSection = () => {
	return (
		<Wrapper>
			<Container>
				<QrCodeInfoSection>
					<QrCodeTitle>
						<span>Unlock Endless Possibilities:</span> <br />
						<span>Link Your QR Code to Any URL!</span>
					</QrCodeTitle>
					<QrCodeText>
						<span>
							Discover the magic of dynamic QR codes! Easily
							connect your customers to any
						</span>
						<br />
						<span>
							website, product page, or exclusive content with a
							simple scan.
						</span>
					</QrCodeText>
				</QrCodeInfoSection>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #2e4846;
	color: #ffffff;
	margin: 0 auto 60px auto;
`;

const QrCodeInfoSection = styled.div`
	padding: 200px 0;

	@media screen and (max-width: 768px) {
		width: 100%;
		max-width: 70%;
		margin: auto;
		padding: 150px 0;
	}
`;

const QrCodeTitle = styled.h3`
	font-size: 45px;
	font-weight: 600;
	margin-bottom: 10px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 30px;

		br {
			display: none;
		}

		span {
			margin-right: 3px;
		}
	}
`;

const QrCodeText = styled.p`
	font-size: 20px;
	text-align: center;
	line-height: 30px;
	margin-top: 20px;

	@media screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 24px;

		br {
			display: none;
		}

		span {
			margin-right: 3px;
		}
	}
`;
