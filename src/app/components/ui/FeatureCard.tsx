"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const FeatureCard = ({
  feature,
}: {
  feature: { icon: ReactNode; title: string; description: string };
}) => {
  return (
    <motion.div
      className="flex min-h-36 flex-col gap-4 rounded-3xl border border-white/80 bg-white/75 p-5 text-left shadow-lg shadow-pink-900/5 backdrop-blur sm:flex-row sm:gap-6 sm:p-6"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-pink-50 text-5xl sm:h-20 sm:w-20 sm:rounded-3xl sm:text-6xl">
        {feature.icon}
      </div>
      <hgroup>
        <h3 className="mb-2 text-lg font-extrabold leading-snug text-gray-950 sm:text-xl">
          {feature.title}
        </h3>
        <p className="whitespace-pre-wrap break-keep text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {feature.description}
        </p>
      </hgroup>
    </motion.div>
  );
};

export default FeatureCard;
