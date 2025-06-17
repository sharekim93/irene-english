"use client";
import { HeroUIProvider } from "@heroui/react";

const CustomHeroUiProvider = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default CustomHeroUiProvider;
