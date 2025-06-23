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
      className="text-left flex gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-6xl mb-4 flex-none">{feature.icon}</div>
      <hgroup>
        <h3 className="text-xl font-semibold mb-2 text-black">
          {feature.title}
        </h3>
        <p className="text-gray-600 whitespace-pre-wrap">
          {feature.description}
        </p>
      </hgroup>
    </motion.div>
  );
};

export default FeatureCard;
