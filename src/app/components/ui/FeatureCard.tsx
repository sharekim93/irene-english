"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

const FeatureCard = ({
  feature,
  index,
}: {
  feature: { icon: ReactNode; title: string; description: string };
  index: number;
}) => {
  return (
    <motion.div
      className="flex min-h-36 gap-6 rounded-3xl border border-white/80 bg-white/75 p-6 text-left shadow-xl shadow-pink-900/5 backdrop-blur"
      initial={{ opacity: 0, y: 44, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="flex h-20 w-20 flex-none items-center justify-center rounded-3xl bg-pink-50 text-6xl">
        {feature.icon}
      </div>
      <hgroup>
        <h3 className="mb-2 text-xl font-black text-gray-950">
          {feature.title}
        </h3>
        <p className="whitespace-pre-wrap break-keep leading-7 text-gray-600">
          {feature.description}
        </p>
      </hgroup>
    </motion.div>
  );
};

export default FeatureCard;
