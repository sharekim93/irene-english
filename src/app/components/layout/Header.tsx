"use client";

import React from "react";
import { motion } from "framer-motion";
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
import logoImage from "@/images/logo.webp";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "프로그램", href: "#programs", highlight: false },
    { name: "학습 시스템", href: "#features", highlight: false },
    { name: "학원 찾기", href: "#location", highlight: false },
    { name: "공지사항", href: "#notice", highlight: false },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      className="shadow-xs"
      maxWidth="full"
      height="80px"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-pink-600"
        />

        {/* Logo */}
        <NavbarBrand className="flex items-center gap-3 flex-none">
          <Image src={logoImage} alt="logo" width={158} height={36} />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className={`
                text-lg font-medium transition-all duration-200 hover:scale-105
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
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs">📞</span>
            </div>
            <span className="font-medium">1588-0000</span>
          </div>
        </NavbarItem>

        {/* Mobile Contact Button */}
        <NavbarItem className="md:hidden">
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            size="sm"
            className="bg-pink-50 text-pink-600"
          >
            📞
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 bg-white">
        <div className="flex flex-col gap-4">
          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
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
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">📞</span>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">1588-0000</p>
                  <p className="text-xs text-gray-500">평일 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
