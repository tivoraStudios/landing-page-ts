"use client";

import { Banner } from "@/components/banner";
import { NavigationBar } from "@/components/navigation-bar";
import React from "react";
import { Header } from "./header";
import { QrCodeSection } from "./qr-code-section";
import { HowItWorks } from "./how-it-works";
import { ShowCaseSection } from "./show-case-section";
import { Footer } from "@/components/footer";
import { SliderSection } from "./slider-section";

export const HomePageContainer = () => {
	return (
		<div>
			<Banner />
			<NavigationBar />
			<Header />
			<ShowCaseSection />
			<SliderSection />
			<QrCodeSection />
			<HowItWorks />
			<Footer />
		</div>
	);
};
