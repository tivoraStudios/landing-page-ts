"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Container, Button } from "./styled-components";
import Image from "next/image";
import CartIconSrc from "@/assets/icons/cart.svg";
import LogoIconSrc from "@/assets/icons/logo-desktop.svg";
import LogoMobileIconSrc from "@/assets/icons/logo-mobile.svg";
import { useMediaQuery } from "@/hooks/use-media-query";
import { WaitListModal } from "./waitlist-modal";
import { SuccessModal } from "./success-modal";

interface NavigationBarProps {}

export const NavigationBar = (props: NavigationBarProps) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleToggleWaitlistModal = () => {
    setIsWaitlistModalOpen(!isWaitlistModalOpen);
  };

  const handleToggleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleRouteToHomepage = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <StyledContainer>
        <Hamburger $open={menuOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Logo onClick={handleRouteToHomepage}>
          <Image
            src={isMobile ? LogoMobileIconSrc : LogoIconSrc}
            alt="tivora studios logo"
          />
        </Logo>
        <LinksWrapper $open={menuOpen}>
          <MenuLink href="/" $isactive={pathname === "/"}>
            Our Products
          </MenuLink>
          <MenuLink href="/about-us" $isactive={pathname === "/about-us"}>
            About Us
          </MenuLink>
          <MenuLink
            href="#footerLinksSection"
            $isactive={pathname === "/contact-us"}
          >
            Contact
          </MenuLink>
        </LinksWrapper>
        <OtherActionsWrapper>
          <MyDesignsBtn onClick={handleToggleWaitlistModal}>
            Join Our Waitlist
          </MyDesignsBtn>
        </OtherActionsWrapper>
        <MobileCtaWrapper $menuopen={menuOpen}>
          <CreateMyDesignBtn
            $bg="#222238"
            $color="#ffffff"
            onClick={handleToggleWaitlistModal}
          >
            {" "}
            Create My Own Design
          </CreateMyDesignBtn>
          <JoinOurCommunityBtn
            $bg="#9032FF"
            $color="#ffffff"
            onClick={handleToggleWaitlistModal}
          >
            Join Our Community
          </JoinOurCommunityBtn>
        </MobileCtaWrapper>
      </StyledContainer>
      <WaitListModal
        isOpen={isWaitlistModalOpen}
        onClose={handleToggleWaitlistModal}
        handleShowSuccessModal={handleToggleSuccessModal}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleToggleSuccessModal}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid #bababa;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
`;

const LinksWrapper = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.$open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
    transition: left 0.3s ease-in-out;
    z-index: 10;
    padding-top: 30px;
  }
`;

const MenuLink = styled(Link)<{ $isactive: boolean }>`
  font-weight: ${(props) => (props.$isactive ? "600" : "400")};
  font-size: 16px;
  color: ${(props) => (props.$isactive ? "#FFB600" : "#000000")};
  text-decoration: none;
  display: inline-block;
  margin-right: 25px;

  &:last-child {
    margin-rigth: 0;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #00000042;
    margin-right: 0;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
`;

const Hamburger = styled.div<{ $open: boolean }>`
  display: none;
  cursor: pointer;
  z-index: 11;
  width: 30px;
  height: 20px;
  position: relative;

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #9032ff;
    border-radius: 2px;
    transition: all 0.3s ease;
    left: 0;

    &:nth-child(1) {
      top: ${(props) => (props.$open ? "50%" : "0")};
      transform: ${(props) => (props.$open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: center;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${(props) => (props.$open ? 0 : 1)};
    }

    &:nth-child(3) {
      top: ${(props) => (props.$open ? "50%" : "auto")};
      bottom: ${(props) => (props.$open ? "auto" : "0")};
      transform: ${(props) => (props.$open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.$open
        ? `
			        position: absolute;
        			top: 20px;
				`
        : ``}
  }
`;

const MyDesignsBtn = styled.button`
  background-color: #9032ff;
  color: #ffffff;
  border-radius: 18px;
  padding: 13px 24px;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 14px;
    margin-right: 0;
  }
`;

const OtherActionsWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    > img {
      display: none;
    }
  }
`;

const CreateMyDesignBtn = styled(Button)`
  border-radius: 10px;
  width: 200px;
  height: 45px;
`;

const JoinOurCommunityBtn = styled(CreateMyDesignBtn)`
  margin-top: 10px;
`;

const MobileCtaWrapper = styled.div<{ $menuopen: boolean }>`
  display: none;

  ${(props) =>
    props.$menuopen
      ? `
					display: flex;
					flex-direction: column;
					position: absolute;
					z-index: 10;
					bottom: 50px;
					left: 50%;
					transform: translate(-50%, -50%);
					text-align: center;
				`
      : ``}
`;
