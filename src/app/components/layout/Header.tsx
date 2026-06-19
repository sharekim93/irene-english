"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Chip,
} from "@heroui/react";
import logoImage from "@/images/logo.png";
import Image from "next/image";
import { navItems, siteConfig } from "@/config/site";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const contactButtonClass =
    "contact-cta-button h-11 min-h-11 gap-2.5 rounded-[18px] bg-[#e94391] px-4 font-nanum-square-bold font-extrabold text-white shadow-none transition data-[hover=true]:bg-[#d92d7f] data-[hover=true]:opacity-100";

  const ContactButton = ({
    className = "",
  }: {
    className?: string;
  }) => (
    <div className={`contact-ripple-anchor ${className}`}>
      <Button
        as="a"
        href={siteConfig.telHref}
        size="lg"
        radius="lg"
        className={`${contactButtonClass} contact-expand-button`}
        aria-label={`전화 상담 ${siteConfig.phone}`}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/95 text-sm text-[#e94391] shadow-inner shadow-pink-200"
        >
          📞
        </span>
        <span className="contact-expand-label" aria-hidden="true">
          <span className="contact-short-label">상담하기</span>
          <span className="contact-phone-label">{siteConfig.phone}</span>
        </span>
      </Button>
    </div>
  );

  const MobileContactButton = ({
    className = "",
    fullWidth = false,
    onClick,
  }: {
    className?: string;
    fullWidth?: boolean;
    onClick?: () => void;
  }) => (
    <div className={`contact-ripple-anchor ${className}`}>
      <Button
        as="a"
        href={siteConfig.telHref}
        size={fullWidth ? "lg" : "md"}
        radius="lg"
        className={`mobile-touch-contact ${
          fullWidth ? "mobile-touch-contact-full" : ""
        }`}
        aria-label={`전화 상담 ${siteConfig.phone}`}
        onClick={onClick}
      >
        <span aria-hidden="true" className="mobile-touch-icon">
          📞
        </span>
        <span className="mobile-touch-label">전화상담</span>
      </Button>
    </div>
  );

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-xl"
      maxWidth="full"
      height="80px"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="h-11 w-11 min-w-11 rounded-full text-pink-600 lg:hidden"
        />

        {/* Logo */}
        <NavbarBrand className="flex items-center gap-3 flex-none">
          <Link href="/" aria-label="삼성영어 셀레나 아이린 석성 홈">
            <Image
              src={logoImage}
              alt="삼성영어 셀레나 아이린 석성 로고"
              width={240}
              height={64}
              className="h-auto w-[180px] sm:w-[220px] lg:w-[240px]"
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className={`
                text-base font-nanum-square-bold font-bold transition-all duration-200 hover:scale-105
                ${
                  item.highlight
                    ? "text-pink-600 hover:text-pink-700"
                    : "text-gray-700 hover:text-pink-600"
                }
              `}
            >
              {item.name}
              {item.highlight && (
                <Chip
                  size="sm"
                  color="warning"
                  variant="flat"
                  className="ml-2 text-xs"
                >
                  NEW
                </Chip>
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Content */}
      <NavbarContent justify="end">
        {/* Contact Info - Hidden on small screens */}
        <NavbarItem className="hidden md:flex items-center">
          <ContactButton />
        </NavbarItem>

        {/* Mobile Contact Button */}
        <NavbarItem className="md:hidden">
          <MobileContactButton />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 bg-white">
        <div className="flex flex-col gap-4">
          {/* Mobile Menu Items */}
          {navItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`
                    text-lg font-medium w-full block py-3 px-4 rounded-lg transition-all
                    ${
                      item.highlight
                        ? "text-pink-600 bg-pink-50 border border-pink-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.highlight && (
                      <Chip
                        size="sm"
                        color="warning"
                        variant="flat"
                        className="text-xs"
                      >
                        NEW
                      </Chip>
                    )}
                  </div>
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}

          {/* Mobile Contact Section */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex flex-col items-start gap-3">
              <MobileContactButton
                className="w-full"
                fullWidth
                onClick={() => setIsMenuOpen(false)}
              />
              <p className="px-1 text-xs font-medium text-gray-500">
                평일 {siteConfig.openingHoursText}
              </p>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
