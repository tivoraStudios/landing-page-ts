"use client";

import { Banner } from "@/components/banner";
import { NavigationBar } from "@/components/navigation-bar";
import React from "react";
import { Footer } from "@/components/footer";
import { WhatIsTivora } from "./what-is-tivora";
import { OutBeliefSystem } from "./our-belief-system";
import { Spacer } from "@/components/styled-components";
import HeaderHeroBgImage from "@/assets/icons/about-us-hero-bg.svg";
import FooterHeroBgImage from "@/assets/icons/about-us-hero-footer-bg.svg";
import FooterHeroBgImageMobile from "@/assets/icons/about-us-hero-footer-bg-mobile.svg";
import { HeroSection } from "./hero-section";
import { useMediaQuery } from "@/hooks/use-media-query";

export const AboutPageContainer = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div>
			<Banner />
			<NavigationBar />
			<HeroSection image={HeaderHeroBgImage} />
			<WhatIsTivora />
			<OutBeliefSystem />
			<HeroSection
				image={isMobile ? FooterHeroBgImageMobile : FooterHeroBgImage}
			/>
			<Spacer />
			<Footer />
		</div>
	);
};
