"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();
  const phoneIconMotion = shouldReduceMotion
    ? {}
    : {
        animate: {
          rotate: [0, -12, 12, -8, 0],
          scale: [1, 1.14, 1],
        },
        transition: {
          duration: 1.15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2.4,
        },
      };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-xl"
      maxWidth="full"
      height="80px"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-pink-600"
        />

        {/* Logo */}
        <NavbarBrand className="flex items-center gap-3 flex-none">
          <Link href="/" aria-label="삼성영어 아이린 석성 홈">
            <Image
              src={logoImage}
              alt="삼성영어 아이린 석성 로고"
              width={240}
              height={64}
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
        <NavbarItem className="hidden md:flex items-center gap-4">
          <Link
            href={siteConfig.telHref}
            aria-label={`전화 상담 ${siteConfig.phone}`}
            className="flex items-center gap-2 text-md text-gray-600 hover:text-pink-600"
          >
            <motion.div
              {...phoneIconMotion}
              className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shadow-sm shadow-green-200"
            >
              <span className="text-green-600 text-xs">📞</span>
            </motion.div>
            <span className="font-nanum-square-bold font-extrabold">
              {siteConfig.phone}
            </span>
          </Link>
        </NavbarItem>

        {/* Mobile Contact Button */}
        <NavbarItem className="md:hidden">
          <Button
            as="a"
            href={siteConfig.telHref}
            isIconOnly
            variant="flat"
            color="primary"
            size="sm"
            className="bg-pink-50 text-pink-600"
            aria-label="전화 상담"
          >
            <motion.span {...phoneIconMotion} className="inline-block">
              📞
            </motion.span>
          </Button>
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
            <div className="flex items-center justify-between mb-4">
              <Link
                href={siteConfig.telHref}
                className="flex items-center gap-3 text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`전화 상담 ${siteConfig.phone}`}
              >
                <motion.div
                  {...phoneIconMotion}
                  className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-sm shadow-green-200"
                >
                  <span className="text-green-600">📞</span>
                </motion.div>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {siteConfig.phone}
                  </p>
                  <p className="text-xs text-gray-500">
                    평일 {siteConfig.openingHoursText}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
