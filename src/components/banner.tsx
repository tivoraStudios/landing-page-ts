"use client";

import React from "react";
import styled from "styled-components";

export const Banner = () => {
	return (
		<Wrapper>
			JOIN OUR COMMUNITY TO STAY UPDATED WITH NEW BUSINESS VENTURES AND
			PACKAGING DEALS
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #222238;
	color: #ffffff;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.8px;

	@media screen and (max-width: 768px) {
        font-size: 12px;
		padding: 5px;
		height: fit-content;
		text-align: center;
	}
`;
